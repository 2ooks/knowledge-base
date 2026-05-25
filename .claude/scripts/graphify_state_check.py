"""Quick graphify state check for KB."""
import json
from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from graphify.detect import detect, detect_incremental

kb_raw = Path(r"C:\Users\matttookey\Projects\knowledge-base\raw")

r = detect(kb_raw)
print(f"Total: {r['total_files']} files, ~{r['total_words']:,} words")
print(f"Skipped sensitive: {len(r.get('skipped_sensitive', []))}")
for cat, files in r.get('files', {}).items():
    if files:
        print(f"  {cat}: {len(files)} files")

print("\n===== Incremental detect =====")
try:
    r2 = detect_incremental(kb_raw)
    new_total = r2.get('new_total', 0)
    print(f"New/changed files since last graphify run: {new_total}")
    new_files = r2.get('new_files', {})
    for cat, files in new_files.items():
        if files:
            print(f"  {cat}: {len(files)} new")
except Exception as e:
    print(f"Incremental detect failed: {type(e).__name__}: {e}")
    print("Likely cause: graphify-out/manifest.json doesn't exist (never ran on this corpus).")
