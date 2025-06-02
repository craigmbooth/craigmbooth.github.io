# Hot Sauce Gallery Instructions

This directory contains images for the hot sauce gallery on the website. Follow these steps to add new hot sauce images to the gallery.

## File Naming Convention

All hot sauce images must follow the naming pattern: `hotsauce###.jpg` where `###` is a zero-padded 3-digit number (e.g., `hotsauce001.jpg`, `hotsauce154.jpg`).

## Adding New Hot Sauce Images

### Step 1: Rename Images

If you have new images that don't follow the naming convention (e.g., photos from your phone like `PXL_20250518_173421106.jpg`), rename them to follow the pattern:

1. Find the highest numbered existing image in this directory
2. Rename your new images to the next sequential numbers

**Example:**
```bash
# If the highest existing image is hotsauce153.jpg
mv PXL_20250518_173421106.jpg hotsauce154.jpg
mv PXL_20250518_173429211.jpg hotsauce155.jpg
mv PXL_20250518_173439194.jpg hotsauce156.jpg
```

### Step 2: Generate Thumbnails

Run the thumbnail generation script to create thumbnails for the new images:

```bash
cd /path/to/assets/images/pages/hotsauce
./generate_thumbnails
```

This script will:
- Check for existing thumbnails (prefixed with `t_`)
- Generate thumbnails only for images that don't already have them
- Create appropriately sized thumbnails for the gallery

### Step 3: Update the Hot Sauce Page

Edit the hot sauce page at `/pages/hot-sauce/index.md` to add entries for the new images:

1. Open `/pages/hot-sauce/index.md`
2. In the `gallery:` section, add new entries at the top of the list
3. Use placeholder titles that can be updated later

**Example entry:**
```yaml
- image_path: /assets/images/pages/hotsauce/hotsauce156.jpg
  title: Hot Sauce Placeholder 156
```

### Step 4: Update Titles

Replace the placeholder titles with the actual hot sauce names by editing the `title:` field for each entry.

## Directory Structure

```
hotsauce/
├── README.md                    # This file
├── generate_thumbnails          # Script to create thumbnails
├── header.png                   # Gallery header image
├── hotsauce001.jpg             # Hot sauce images
├── hotsauce002.jpg
├── ...
├── hotsauce156.jpg
├── t_header.png                # Thumbnail files (auto-generated)
├── t_hotsauce001.jpg
├── t_hotsauce002.jpg
├── ...
└── t_hotsauce156.jpg
```

## Notes

- The gallery automatically counts the number of entries and displays it on the page
- Thumbnails are automatically used in the gallery display
- New images should be added in descending order (newest first) in the YAML
- Always run the thumbnail generation script after adding new images
- The `generate_thumbnails` script is safe to run multiple times - it won't recreate existing thumbnails

## Quick Reference Commands

```bash
# Rename images to follow convention (adjust numbers as needed)
mv "original_filename.jpg" hotsauce###.jpg

# Generate thumbnails
./generate_thumbnails

# Check current highest number
ls hotsauce*.jpg | tail -1
```