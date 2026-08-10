import StudentCard from "./StudentCard.jsx";

// StudentList receives the students array through props and renders one
// StudentCard per student using .map(). Individual cards are never
// hard-coded here.
function StudentList({ students, onDelete }) {
  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          department={student.department}
          cgpa={student.cgpa}
          isActive={student.isActive}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;
