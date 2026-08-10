# Student Dashboard

A small React + Vite dashboard for managing a list of students. You can view
every student on a card, add new students through a validated form, delete
students, and see the live totals update as the data changes.

## Features

- React + Vite
- Reusable components (Navbar, StudentCard, StudentList, StudentForm, CardWrapper)
- JSX
- Props for passing data and functions between components
- Events (add student, delete student)
- Controlled forms with validation
- Conditional rendering (ternary, `&&`, IIFE, `if...else`, `switch`)
- Component composition (`children` prop via `CardWrapper`)
- State management with `useState`
- Lifting state up (student data lives in `App.jsx`)
- Error Boundary (class component) with a safe way to test it
- Responsive UI for desktop, tablet and mobile

## Technologies

- React
- Vite
- JavaScript
- CSS

## Project Structure

```
student-dashboard/
├── public/                 Static assets served as-is
├── src/
│   ├── assets/              Images and other bundled assets
│   ├── components/
│   │   ├── Navbar.jsx        Top bar showing the title and live student count
│   │   ├── StudentCard.jsx   Displays one student; has the Delete button
│   │   ├── StudentList.jsx   Maps the students array to StudentCard elements
│   │   ├── StudentForm.jsx   Controlled form for adding a new student
│   │   ├── ErrorFallback.jsx Class-based Error Boundary + fallback message
│   │   └── CardWrapper.jsx   Reusable card container using the children prop
│   ├── pages/
│   │   └── Home.jsx          Composes the form, list, and batch status
│   ├── data/
│   │   └── students.js       Initial sample student data
│   ├── App.jsx               Owns the main student state (lifted state)
│   ├── main.jsx               React entry point
│   └── index.css              Global styles / design system
├── package.json
├── index.html
└── README.md
```

## Installation

```
npm install
```

## Run

```
npm run dev
```

Then open the URL Vite prints in your terminal (usually `http://localhost:5173`).

## Build

```
npm run build
```

## How It Works

- `App.jsx` owns the `students` state array with `useState`, plus the
  `handleAddStudent` and `handleDeleteStudent` functions.
- That state and those functions are passed down as **props** to `Home.jsx`,
  which in turn passes them to `Navbar`, `StudentForm`, and `StudentList`.
- `StudentForm` is a **controlled component**: its inputs are tied to
  `useState`, it validates the name, department, and CGPA, calls
  `event.preventDefault()`, and then calls `onAddStudent` with a new student
  object (a fresh `id`, and `isActive: true` by default).
- `StudentList` loops over the students array with `.map()` and renders one
  `StudentCard` per student, using each student's `id` as the React `key`.
- `StudentCard` displays the student's details and includes a **Delete**
  button that calls `onDelete(id)`, which removes that student from state in
  `App.jsx` using an immutable `filter()` update (never mutating the array
  directly).
- `Navbar` displays `students.length`, so the total updates automatically the
  moment a student is added or removed.
- `ErrorFallback.jsx` is a class component that implements
  `getDerivedStateFromError` and `componentDidCatch` to catch errors thrown
  while rendering `StudentList`/`StudentCard`, and shows the message
  "Something went wrong. Please reload the application." instead of a blank
  page. Each `StudentCard` has a "Test Error" button you can click to safely
  trigger this on purpose.
