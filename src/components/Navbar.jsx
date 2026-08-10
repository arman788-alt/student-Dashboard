// Navbar receives the total student count through props and displays it.
// Because the count is passed down from App.jsx (where the state lives),
// it updates automatically whenever a student is added or deleted.

function Navbar({ totalStudents }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="navbar-title">Student Dashboard</span>
        <span className="navbar-count">Total Students: {totalStudents}</span>
      </div>
    </header>
  );
}

export default Navbar;
