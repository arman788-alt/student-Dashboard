import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import initialStudents from "./data/students.js";

// App.jsx owns the main student data. This is "lifting state up":
// the state lives in the closest common ancestor of everything that
// needs to read or change it, then flows down through props.
function App() {
  const [students, setStudents] = useState(initialStudents);

  function handleAddStudent(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  function handleDeleteStudent(id) {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  }

  return (
    <div className="app">
      <Navbar totalStudents={students.length} />
      <Home
        students={students}
        onAddStudent={handleAddStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
}

export default App;
