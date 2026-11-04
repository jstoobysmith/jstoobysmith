"""Generate the TikZ forest for the 'An analogy' slide.

Trees sit on a jittered grid and are dropped wherever they would land on the
road, the river or one of the footpaths, so the paths visibly weave between
trees.  Deterministic (fixed seed) so the slide is stable between builds.
"""
import math
import random

random.seed(7)

W, H = 8.6, 5.2                  # picture size in cm
ROAD = (1.55, 2.35)              # road band, y range
RIVER_X = lambda y: 6.05 + 0.25 * math.sin(y * 1.1)   # river centre line
RIVER_HALF = 0.28

# Footpaths: control points, drawn with TikZ `plot[smooth]`.
PATHS = [
    [(1.0, 2.35), (1.25, 2.9), (0.85, 3.45), (1.35, 4.05), (1.1, 4.7)],
    [(3.3, 2.35), (3.0, 2.95), (3.55, 3.5), (3.2, 4.0)],
    [(3.55, 3.5), (4.2, 3.85), (4.55, 4.45)],
    [(2.4, 1.55), (2.75, 1.05), (2.3, 0.55)],
    [(7.4, 2.35), (7.75, 2.95), (7.3, 3.5), (7.85, 4.15)],
    [(4.7, 1.55), (4.4, 1.0), (4.95, 0.45)],
]


def dense(points, steps=24):
    """Sample a polyline finely enough for distance checks."""
    out = []
    for (x0, y0), (x1, y1) in zip(points, points[1:]):
        for k in range(steps):
            t = k / steps
            out.append((x0 + t * (x1 - x0), y0 + t * (y1 - y0)))
    out.append(points[-1])
    return out


PATH_SAMPLES = [p for path in PATHS for p in dense(path)]


def clear(x, y):
    if ROAD[0] - 0.42 < y < ROAD[1] + 0.62:      # road, lamps above it
        return False
    if abs(x - RIVER_X(y)) < RIVER_HALF + 0.22:
        return False
    if min(math.hypot(x - px, y - py) for px, py in PATH_SAMPLES) < 0.33:
        return False
    return 0.2 < x < W - 0.2 and 0.15 < y < H - 0.25


trees = []
step = 0.5
for j in range(int(H / step) + 1):
    for i in range(int(W / step) + 1):
        x = i * step + (0.25 if j % 2 else 0) + random.uniform(-0.12, 0.12)
        y = j * step + random.uniform(-0.1, 0.1)
        if clear(x, y):
            trees.append((x, y, random.uniform(0.85, 1.15), random.random() < 0.7))

# Draw back to front so lower trees overlap the ones behind them.
trees.sort(key=lambda t: -t[1])

out = []
o = out.append
o(r"\begin{tikzpicture}[x=1cm,y=1cm]")
o(r"  \path (0,0) rectangle (%.2f,%.2f);" % (W, H))
# river
left = " -- ".join("(%.3f,%.3f)" % (RIVER_X(y) - RIVER_HALF, y) for y in [k * H / 20 for k in range(21)])
right = " -- ".join("(%.3f,%.3f)" % (RIVER_X(y) + RIVER_HALF, y) for y in [H - k * H / 20 for k in range(21)])
o(r"  \fill[jtmist] %s -- %s -- cycle;" % (left, right))
# trees
for x, y, s, conifer in trees:
    if conifer:
        o(r"  \fill[jtgrey!75] (%.3f,%.3f) rectangle ++(0.05,%.3f);" % (x - 0.025, y, 0.14 * s))
        o(r"  \fill[jtgrey!38] (%.3f,%.3f) -- (%.3f,%.3f) -- (%.3f,%.3f) -- cycle;"
          % (x - 0.17 * s, y + 0.1 * s, x + 0.17 * s, y + 0.1 * s, x, y + 0.52 * s))
    else:
        o(r"  \fill[jtgrey!75] (%.3f,%.3f) rectangle ++(0.05,%.3f);" % (x - 0.025, y, 0.16 * s))
        o(r"  \fill[jtgrey!28] (%.3f,%.3f) circle (%.3f);" % (x, y + 0.28 * s, 0.17 * s))
# footpaths
for path in PATHS:
    pts = " ".join("(%.2f,%.2f)" % p for p in path)
    o(r"  \draw[jtcopper,line width=1.1pt,dash pattern=on 2.2pt off 1.6pt,"
      r"line cap=round] plot[smooth,tension=0.7] coordinates {%s};" % pts)
for path in PATHS:
    if path[-1] not in [q for p in PATHS for q in p[:-1]]:
        o(r"  \fill[jtcopper] (%.2f,%.2f) circle (1.6pt);" % path[-1])
# road, with kerbs and a centre line
o(r"  \fill[jttealink] (0,%.2f) rectangle (%.2f,%.2f);" % (ROAD[0], W, ROAD[1]))
o(r"  \draw[jtslate,line width=1.2pt] (0,%.2f) -- (%.2f,%.2f);" % (ROAD[0], W, ROAD[0]))
o(r"  \draw[jtslate,line width=1.2pt] (0,%.2f) -- (%.2f,%.2f);" % (ROAD[1], W, ROAD[1]))
mid = sum(ROAD) / 2
o(r"  \draw[white,line width=1.2pt,dash pattern=on 7pt off 5pt] (0.1,%.2f) -- (%.2f,%.2f);" % (mid, W, mid))
# bridge over the river: parapets with posts
bx = RIVER_X(mid)
for yy, d in [(ROAD[1], 1), (ROAD[0], -1)]:
    o(r"  \draw[jtslate,line width=1.4pt] (%.2f,%.2f) -- (%.2f,%.2f);" % (bx - 0.6, yy + d * 0.12, bx + 0.6, yy + d * 0.12))
    for k in range(5):
        px = bx - 0.6 + k * 0.3
        o(r"  \draw[jtslate,line width=0.8pt] (%.2f,%.2f) -- (%.2f,%.2f);" % (px, yy, px, yy + d * 0.12))
# street lamps along the far kerb
for lx in [0.45, 2.05, 4.05, 7.05, 8.25]:
    o(r"  \draw[jtslate,line width=0.9pt] (%.2f,%.2f) -- (%.2f,%.2f) -- (%.2f,%.2f);"
      % (lx, ROAD[1], lx, ROAD[1] + 0.5, lx + 0.16, ROAD[1] + 0.5))
    o(r"  \fill[white,draw=jtslate,line width=0.6pt] (%.2f,%.2f) circle (1.5pt);" % (lx + 0.17, ROAD[1] + 0.45))
# road signs along the near kerb
for sx in [1.55, 7.7]:
    o(r"  \draw[jtslate,line width=0.9pt] (%.2f,%.2f) -- (%.2f,%.2f);" % (sx, ROAD[0], sx, ROAD[0] - 0.36))
    o(r"  \fill[jttealink,draw=jtslate,line width=0.6pt] (%.2f,%.2f) rectangle ++(0.4,0.2);" % (sx - 0.2, ROAD[0] - 0.42))
    o(r"  \draw[white,line width=0.7pt,-{Stealth[length=2.5pt]}] (%.2f,%.2f) -- ++(0.24,0);" % (sx - 0.12, ROAD[0] - 0.32))
o(r"\end{tikzpicture}")

print("\n".join(out))
