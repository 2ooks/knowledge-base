#!/usr/bin/env python3
"""Check if graphify graph is stale (new raw/ files not in manifest)."""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, 'graphify-out', 'manifest.json')
RAW_DIR = os.path.join(ROOT, 'raw')

if not os.path.exists(MANIFEST) or not os.path.isdir(RAW_DIR):
    sys.exit(0)

try:
    with open(MANIFEST) as f:
        manifest = json.load(f)
    # Manifest keys are relative paths like "raw\articles\foo.md" with mtime values
    known = set()
    for fp in manifest:
        known.add(os.path.normpath(fp))
except Exception:
    sys.exit(0)

new_files = []
for dirpath, _, filenames in os.walk(RAW_DIR):
    for fn in filenames:
        fp = os.path.relpath(os.path.join(dirpath, fn), ROOT)
        if os.path.normpath(fp) not in known and not fn.startswith('.'):
            new_files.append(fn)

if new_files:
    names = ', '.join(new_files[:5])
    print(f"[graphify] {len(new_files)} new file(s) in raw/ not in graph: {names}")
    if len(new_files) > 5:
        print(f"  ...and {len(new_files) - 5} more")
    print("  Suggest: /graphify ./raw --update")
