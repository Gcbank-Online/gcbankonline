# Use an official Nginx image as a parent image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy all your project files into the container's web root directory
COPY . .

# Copy and grant execution permissions to our startup script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Tell Docker that the container listens on port 80
EXPOSE 80

# The command to run when the container starts
CMD ["/entrypoint.sh"]