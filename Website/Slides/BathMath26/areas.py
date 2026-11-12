"""Lines of Lean per top-level area, Mathlib against Tau Ceti.

Feeds the "Areas covered: Mathlib and Tau Ceti" slide in BathMath26.tex.

Usage (with shallow clones of both repositories):
    git clone --depth 1 https://github.com/leanprover-community/mathlib4
    git clone --depth 1 https://github.com/TauCetiProject/TauCeti
    python3 areas.py mathlib4 TauCeti

Prints the LaTeX table rows for the slide (two columns of ROWS areas each,
largest combined first) and the totals line.
"""

import os
import subprocess
import sys

# Top-level directories that hold tooling rather than mathematics.
SKIP = {"Tactic", "Lean", "Util", "Control", "Testing", "Deprecated", "Examples"}
ROWS = 10


def area_lines(root):
    """{area: (lines, files)} for each top-level directory under root."""
    out = {}
    for area in sorted(os.listdir(root)):
        path = os.path.join(root, area)
        if not os.path.isdir(path) or area in SKIP:
            continue
        lines = files = 0
        for dirpath, _, names in os.walk(path):
            for name in names:
                if name.endswith(".lean"):
                    with open(os.path.join(dirpath, name), "rb") as f:
                        lines += f.read().count(b"\n")
                    files += 1
        out[area] = (lines, files)
    return out


def total(root):
    """(lines, files) over every .lean file under root."""
    lines = files = 0
    for dirpath, _, names in os.walk(root):
        for name in names:
            if name.endswith(".lean"):
                with open(os.path.join(dirpath, name), "rb") as f:
                    lines += f.read().count(b"\n")
                files += 1
    return lines, files


def tex(n):
    return f"{n:,}".replace(",", "{,}")


def commit(repo):
    return subprocess.run(["git", "-C", repo, "log", "-1", "--format=%h %cs"],
                          capture_output=True, text=True).stdout.strip()


def main(mathlib_repo, tauceti_repo):
    m = area_lines(os.path.join(mathlib_repo, "Mathlib"))
    t = area_lines(os.path.join(tauceti_repo, "TauCeti"))
    areas = sorted(set(m) | set(t),
                   key=lambda a: -(m.get(a, (0, 0))[0] + t.get(a, (0, 0))[0]))
    shown = areas[:2 * ROWS]

    print(f"% Mathlib  {commit(mathlib_repo)}")
    print(f"% TauCeti  {commit(tauceti_repo)}")
    for i in range(0, len(shown), ROWS):
        print(f"% --- column {i // ROWS + 1}")
        for a in shown[i:i + ROWS]:
            ml = m.get(a, (0, 0))[0]
            tl = t.get(a, (0, 0))[0]
            print(f"        {a:<22} & {tex(ml):>12} & {tex(tl):>12} \\\\")
    for name, repo, sub in [("Mathlib", mathlib_repo, "Mathlib"),
                            ("Tau Ceti", tauceti_repo, "TauCeti")]:
        lines, files = total(os.path.join(repo, sub))
        print(f"% {name}: {tex(lines)} lines across {tex(files)} files")


if __name__ == "__main__":
    main(*sys.argv[1:3])
