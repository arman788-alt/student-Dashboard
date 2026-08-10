import { useState } from "react";
import CardWrapper from "./CardWrapper.jsx";

// StudentCard displays a single student's information.
// It receives everything it needs through props: name, department,
// cgpa, isActive and onDelete.
function StudentCard({ id, name, department, cgpa, isActive, onDelete }) {
  // Local, development-only flag used to intentionally trigger a render
  // error so the Error Boundary can be demonstrated safely. This does not
  // affect the real student data in App.jsx at all.
  const [crash, setCrash] = useState(false);

  if (crash) {
    // Throwing inside render is what the Error Boundary catches.
    throw new Error(`Intentional test error triggered on "${name}"'s card`);
  }

  return (
    <CardWrapper>
      <div className="student-card">
        <div className="student-card-header">
          <h3 className="student-name">{name}</h3>

          {/* 1. Ternary operator: choose the status label and badge style */}
          <span className={`status-badge ${isActive ? "status-active" : "status-inactive"}`}>
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        <p className="student-detail">
          <span className="detail-label">Department:</span> {department}
        </p>
        <p className="student-detail">
          <span className="detail-label">CGPA:</span> {cgpa.toFixed(2)}
        </p>

        {/* 2. Logical && operator: only show this note for active students */}
        {isActive && (
          <p className="active-note">Currently enrolled this semester.</p>
        )}

        {/* 3. IIFE: pick a short performance remark based on CGPA */}
        <p className="performance-note">
          {(function getPerformanceNote() {
            if (cgpa >= 3.75) return "Excellent standing";
            if (cgpa >= 3.0) return "Good standing";
            return "Needs improvement";
          })()}
        </p>

        <div className="student-card-actions">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(id)}
            aria-label={`Delete ${name}`}
          >
            Delete
          </button>

          {/* Safe, clearly-labeled way to test the Error Boundary */}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setCrash(true)}
            aria-label={`Trigger test error on ${name}'s card`}
            title="Development only: intentionally crash this card to test the Error Boundary"
          >
            Test Error
          </button>
        </div>
      </div>
    </CardWrapper>
  );
}

export default StudentCard;
