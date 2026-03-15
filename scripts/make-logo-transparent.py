#!/usr/bin/env python3
"""将 logo 白底转为透明，输出为 PNG。"""
from PIL import Image
import sys

def main():
    src = sys.argv[1] if len(sys.argv) > 1 else "logo-input.png"
    dst = sys.argv[2] if len(sys.argv) > 2 else "public/logo.png"
    img = Image.open(src).convert("RGBA")
    data = list(img.getdata())
    # 白底及接近白色的像素改为透明，fuzz 约 15%
    threshold = 240
    new_data = []
    for item in data:
        r, g, b, a = item
        if r >= threshold and g >= threshold and b >= threshold:
            new_data.append((r, g, b, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(dst, "PNG")
    print(f"Saved: {dst}")

if __name__ == "__main__":
    main()
