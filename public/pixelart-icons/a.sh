#!/bin/bash

# Check if the destination directory exists, if not, create it
DEST_DIR="converted_pngs"
if [ ! -d "$DEST_DIR" ]; then
  mkdir "$DEST_DIR"
fi

# Loop through all SVG files in the current directory
for svg_file in *.svg; do
  # Get the base name of the SVG file (without the extension)
  base_name=$(basename "$svg_file" .svg)
  
  # Convert the SVG to PNG with a black background using the magick command
  qlmanage -t -s 1000 -o . "$svg_file"
done

echo "Conversion complete. PNG files are in the '$DEST_DIR' directory."

