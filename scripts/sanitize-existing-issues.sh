#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is required but not installed." >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required but not installed." >&2
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required but not installed." >&2
  exit 1
fi

REPO="${1:-$(gh repo view --json nameWithOwner --jq .nameWithOwner)}"

echo "Sanitizing open new-source issues in ${REPO}..."

gh api --paginate "repos/${REPO}/issues?state=open&labels=new-source&per_page=100" --jq '.[] | @base64' | while IFS= read -r row; do
  issue_json="$(printf '%s' "${row}" | base64 --decode)"
  number="$(printf '%s' "${issue_json}" | jq -r '.number')"
  body="$(printf '%s' "${issue_json}" | jq -r '.body // ""')"

  sanitized_body="$(python3 -c '
import re, sys

text = sys.stdin.read()
pattern = re.compile(r"(?<!\w)@([a-zA-Z0-9][a-zA-Z0-9-]{0,38})\b")

def sanitize(match):
    start, end = match.span(0)
    before = text[start - 1] if start > 0 else ""
    after = text[end] if end < len(text) else ""
    if before == "`" and after == "`":
        return match.group(0)
    return f"`@{match.group(1)}`"

print(pattern.sub(sanitize, text), end="")
' <<<"${body}")"

  if [[ "${sanitized_body}" != "${body}" ]]; then
    echo "Updating issue #${number}"
    gh api --method PATCH "repos/${REPO}/issues/${number}" -f body="${sanitized_body}" >/dev/null
    gh issue comment "${number}" --repo "${REPO}" --body "Applied retroactive mention sanitization to this issue body: wrapped detected \`@handle\` tokens in backticks to avoid accidental GitHub user notifications." >/dev/null
  else
    echo "No change needed for issue #${number}"
  fi
done

echo "Done."
