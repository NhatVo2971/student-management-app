# Student Management App

A simple Student Management System built with HTML, CSS, JavaScript, and REST API using JSON Server.

## Features

- View student list
- Add new student
- Edit student information
- Delete student
- Search students by name
- Sort students A-Z / Z-A
- Pagination
- Dashboard summary
- Loading state
- Error handling
- Modular JavaScript structure

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- REST API
- JSON Server
- Git
- GitHub

## Project Structure

```text
StudentManagementSystem/
│
├── index.html
├── style.css
├── app.js
├── api.js
├── ui.js
├── db.json
└── README.md
```

## API Endpoints

Base URL:

```text
http://localhost:3000/students
```

| Method | Endpoint      | Description          |
|        |               |                      |
| GET    | /students     | Get all students     |
| POST   | /students     | Create a new student |
| PUT    | /students/:id | Update a student     |
| DELETE | /students/:id | Delete a student     |

## How to Run

1. Clone this repository

```bash
git clone https://github.com/NhatVo2971/student-management-app.git
```

2. Go to the project folder

```bash
cd student-management-app
```

3. Start JSON Server

```bash
npx json-server db.json
```

4. Open `index.html` in the browser.

## What I Learned

Through this project, I learned how to:

- Work with REST API
- Use Fetch API
- Handle asynchronous JavaScript with async/await
- Build CRUD features
- Organize JavaScript code into multiple files
- Use Git and GitHub for version control