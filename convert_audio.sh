#!/bin/bash
# Convert all M4A files from ALAC to AAC format for browser compatibility

AUDIO_DIR="audio"
BACKUP_DIR="audio_backup"

# Create backup directory
mkdir -p "$BACKUP_DIR"

count=0
total=$(ls -1 "$AUDIO_DIR"/*.m4a 2>/dev/null | wc -l | tr -d ' ')

echo "======================================"
echo "Converting $total M4A files to AAC..."
echo "Original files will be backed up to $BACKUP_DIR"
echo "======================================"
echo ""

for file in "$AUDIO_DIR"/*.m4a; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        basename_no_ext=$(basename "$file" .m4a)
        backup_file="$BACKUP_DIR/$filename"
        temp_file="$AUDIO_DIR/${basename_no_ext}_temp.m4a"
        
        echo "[$((count+1))/$total] $filename"
        
        # Convert to AAC format (browser compatible)
        afconvert -f mp4f -d aac -b 128000 -s 3 "$file" "$temp_file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            # Backup original
            mv "$file" "$backup_file"
            # Replace with converted
            mv "$temp_file" "$file"
            ((count++))
            echo "  ✅ Done"
        else
            echo "  ❌ Failed"
            rm -f "$temp_file" 2>/dev/null
        fi
    fi
done

echo ""
echo "======================================"
echo "Conversion complete: $count/$total files"
echo "Backups saved in: $BACKUP_DIR"
echo "======================================"
