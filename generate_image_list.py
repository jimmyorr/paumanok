import os

# Path to the cards directory
cards_dir = "./cards"
script_file = "./script.js"

# Supported image file extensions
supported_extensions = (".png", ".jpg", ".jpeg", ".gif")

# Scan the cards directory for images and sort them alphabetically
images = sorted(
    [f'"{file}"' for file in os.listdir(cards_dir) if file.lower().endswith(supported_extensions)]
)

if not images:
    print("No images found in the cards directory.")
    exit()

# Generate the JavaScript image array
image_array = f"const images = [{', '.join(images)}];"

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

print(f"Updated {script_file} with the following images (sorted):")
print(", ".join(images))
