#!/bin/bash

# Create the project root directory
mkdir -p project-root

# Create the components directory and files
mkdir -p project-root/components
touch project-root/components/header.js
touch project-root/components/footer.js
touch project-root/components/home.js
touch project-root/components/about.js
touch project-root/components/services.js
touch project-root/components/projects.js
touch project-root/components/contact.js

# Create the styles directory and the styles.css file
mkdir -p project-root/styles
touch project-root/styles/styles.css

# Create the HTML files in the project root
touch project-root/index.html
touch project-root/about.html
touch project-root/services.html
touch project-root/projects.html
touch project-root/contact.html

echo "Project structure created successfully."
