#!/bin/sh

# This script finds every file ending in .tsx and replaces the placeholder
# 'process.env.API_KEY' with the actual API_KEY from the environment variable.
# The key is wrapped in quotes to be a valid JavaScript string.

# We use a temporary file to avoid issues with `sed` on different systems.
for file in $(find /usr/share/nginx/html -type f -name "*.tsx"); do
  # Use a temporary file for sed's output
  tmp_file=$(mktemp)
  # Replace the string and write to the temporary file
  sed "s|process.env.API_KEY|'${API_KEY}'|g" "$file" > "$tmp_file"
  # Move the temporary file back to the original file's location
  mv "$tmp_file" "$file"
done


# Start the Nginx web server in the foreground
echo "Starting Nginx..."
nginx -g 'daemon off;'