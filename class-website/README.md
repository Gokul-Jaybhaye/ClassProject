# Class Website Documentation

## Project Overview
This project is a class website designed to provide information and resources for students. It includes various sections such as class details, attendance, revision materials, and contact information.

## File Structure
The project is organized as follows:

```
class-website
├── src
│   ├── index.html          # Home page featuring a hero section and highlights
│   ├── about.html          # Overview of the website and its purpose
│   ├── contact.html        # Contact form and map for inquiries
│   ├── assets
│   │   ├── css
│   │   │   ├── style.css   # Global styles for the website
│   │   │   └── responsive.css # Mobile responsiveness styles
│   │   ├── js
│   │   │   ├── main.js     # Navigation and general scripts
│   │   │   ├── test.js     # Logic for weekly tests
│   │   │   ├── topper.js    # Logic for displaying monthly toppers
│   │   │   ├── attendance.js # Logic for the attendance system
│   │   │   └── revision.js  # Loads notes and YouTube embeds for revision
│   │   ├── images          # Directory for logos and photos
│   │   ├── pdfs            # Directory for study materials and revision notes
│   │   └── data
│   │       ├── tests.json   # Sample JSON data for tests
│   │       ├── toppers.json  # Sample JSON data for toppers
│   │       └── attendance.json # Sample JSON data for attendance
├── README.md               # Documentation for the project
└── favicon.ico             # Favicon for the website
```

## Features
- **Home Page**: A welcoming page with essential highlights and embedded content.
- **Class Overview**: Detailed information about classes 1–10.
- **Dynamic Class Detail Page**: A template for displaying specific class details.
- **Weekly Test Results**: A section dedicated to showcasing weekly test outcomes.
- **Monthly Toppers**: Highlights of students who excel each month.
- **Attendance Sheet**: A comprehensive attendance tracking system.
- **Revision Materials**: Access to PDFs and YouTube videos for study purposes.
- **Gallery**: A collection of photos and videos related to class activities.
- **Contact Form**: A means for users to reach out with inquiries.

## Getting Started
To get started with the project, clone the repository and open the `src` directory. You can view the website by opening `index.html` in a web browser.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.