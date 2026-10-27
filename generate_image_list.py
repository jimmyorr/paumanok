import os
from PIL import Image

# Path to the cards and thumbnails directories
cards_dir = "./cards"
thumbs_dir = "./thumbs"
script_file = "./script.js"

# Supported image file extensions
supported_extensions = (".png", ".jpg", ".jpeg", ".gif")

os.makedirs(thumbs_dir, exist_ok=True)

# Scan the cards directory for images and sort them alphabetically
card_files = sorted(
    [file for file in os.listdir(cards_dir) if file.lower().endswith(supported_extensions)]
)

if not card_files:
    print("No images found in the cards directory.")
    exit()

# Generate 2x Retina WebP thumbnails (330x450) for fast gallery loading
for fname in card_files:
    src = os.path.join(cards_dir, fname)
    base = os.path.splitext(fname)[0]
    dst = os.path.join(thumbs_dir, f"{base}.webp")
    with Image.open(src) as img:
        thumb = img.resize((330, 450), Image.Resampling.LANCZOS)
        thumb.save(dst, format="WEBP", quality=88, method=6)

images = [f'"{file}"' for file in card_files]

# Generate the JavaScript image array
image_array = f"  const images = [{', '.join(images)}];"

# Update the script.js file
with open(script_file, "r") as file:
    content = file.readlines()

# Replace the `const images` line in the script.js
with open(script_file, "w") as file:
    for line in content:
        if line.strip().startswith("const images"):
            file.write(image_array + "\n")
        else:
            file.write(line)

print(f"Updated {script_file} and {thumbs_dir}/ with the following images (sorted):")
print(", ".join(images))
