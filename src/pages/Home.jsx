import StudentForm from "../components/StudentForm.jsx";
import StudentList from "../components/StudentList.jsx";
import ErrorFallback from "../components/ErrorFallback.jsx";

// 1. if...else version of the batch-status logic.
function getBatchStatusIfElse(count) {
  if (count === 0) {
    return "No Students Found";
  } else if (count <= 5) {
    return "Small Batch";
  } else {
    return "Large Batch";
  }
}

// 2. switch statement version of the same logic, used for a secondary
// "system check" label so both approaches are demonstrated meaningfully.
function getBatchStatusSwitch(count) {
  switch (true) {
    case count === 0:
      return "No Students Found";
    case count <= 5:
      return "Small Batch";
    default:
      return "Large Batch";
  }
}

function Home({ students, onAddStudent, onDeleteStudent }) {
  const batchStatus = getBatchStatusIfElse(students.length);
  const batchStatusCheck = getBatchStatusSwitch(students.length);

  return (
    <main className="home">
      <section className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="batch-status">Batch Status: {batchStatus}</p>
        <p className="batch-status-secondary">System check: {batchStatusCheck}</p>
      </section>

      <section className="form-section">
        <StudentForm onAddStudent={onAddStudent} />
      </section>

      <section className="list-section">
        <h2 className="section-title">Students</h2>

        {/* 3. Ternary operator directly inside JSX: empty state vs. list */}
        {students.length === 0 ? (
          <p className="empty-state">No Students Found</p>
        ) : (
          <ErrorFallback>
            <StudentList students={students} onDelete={onDeleteStudent} />
          </ErrorFallback>
        )}
      </section>
    </main>
  );
}

export default Home;
