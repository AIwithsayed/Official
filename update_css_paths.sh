#!/bin/bash

# Find all HTML files
find . -name "*.html" | while read file; do
    # Replace absolute CSS paths with relative paths
    sed -i 's|href="/css/|href="../css/|g' "$file"
    
    # For index.html, keep existing relative paths
    if [[ "$file" == *"/index.html" ]]; then
        sed -i 's|href="css/|href="./css/|g' "$file"
    fi
    
    echo "Updated CSS paths in $file"
done

# Optional: Create a .nojekyll file to prevent GitHub Pages from processing with Jekyll
touch .nojekyll
