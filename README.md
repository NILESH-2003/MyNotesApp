# NotesApp by Nilesh Ranjan CMRIT

## Overview
NotesApp is a simple and intuitive web application that allows users to create, manage, and organize their notes seamlessly. Built with a React frontend and an Express backend, this application leverages MongoDB for data storage.

## Features
- User authentication (signup and login)
- Create, read, update, and delete notes
- User profiles with optional profile images
- Responsive design for various devices

## Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Image Hosting:** Cloudinary
- **State Management:** Context API 

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NotesApp.git
Navigate to the client directory and install dependencies:
bash
Copy code
cd NotesApp/client
npm install
Navigate to the server directory and install dependencies:
bash
Copy code
cd ../server
npm install
Running the Application
Start the backend server:

bash
Copy code
npm start
The server runs on http://localhost:6969.

In a separate terminal, start the frontend:

bash
Copy code
cd client
npm start
The frontend will be available at http://localhost:3000.

Deployment
Backend Deployment
The backend is deployed on Render. To connect your frontend to the backend, make sure to replace all instances of localhost:6969 in your frontend code with your deployed backend URL.

Frontend Deployment
The frontend is deployed on Netlify. Follow these steps:

Build the frontend:
bash
Copy code
npm run build
Deploy the contents of the dist folder on Netlify by setting the base directory and publishing directory as follows:
Branch to Deploy: main
Base Directory: client
Build Command: npm run build
Publish Directory: dist
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
React
Node.js
Express
MongoDB
Cloudinary
sql
Copy code

### Instructions to Customize
- Replace `https://github.com/yourusername/NotesApp.git` with your actual GitHub repository link.
- Update any sections as needed to match your project specifics.
- Feel free to add any additional features or acknowledgments relevant to your project!
