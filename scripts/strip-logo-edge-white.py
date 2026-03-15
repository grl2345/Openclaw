#!/usr/bin/env python3
"""只把 logo 边缘的浅色/白色像素改为透明，主体与其余部分不改。"""
from PIL import Image
import sys

def main():
    path = sys.argv[1] if len(sys.argv) > 1 else "public/logo.png"
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    px = img.load()

    # 只清外缘纯白/浅灰，R/G/B 都>=220（能清掉灰晕，不伤眼睛白、不伤红/橙）
    light_threshold = 220
    transparent_alpha = 100

    # 用「原始」透明背景定义边缘，只清这一层，绝不向内侵蚀（避免伤到眼睛）
    orig_alpha = [list(px[x, y][3] for x in range(w)) for y in range(h)]

    def has_original_transparent_neighbor(x, y):
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h:
                    if orig_alpha[ny][nx] < transparent_alpha:
                        return True
        return False

    def is_light(r, g, b):
        return r >= light_threshold and g >= light_threshold and b >= light_threshold

    # 只清「原始图上就贴透明背景」的那一圈，单轮、不蔓延
    changed = 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if not has_original_transparent_neighbor(x, y):
                continue
            if is_light(r, g, b):
                px[x, y] = (r, g, b, 0)
                changed += 1

    img.save(path, "PNG")
    print(f"Saved: {path} (cleared {changed} edge pixels)")

if __name__ == "__main__":
    main()
