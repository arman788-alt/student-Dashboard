import { useState } from "react";

// StudentForm is a controlled form: every input's value is driven by
// React state, and every change updates that state.
function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name cannot be empty.";
    }

    if (department.trim() === "") {
      newErrors.department = "Department cannot be empty.";
    }

    const cgpaNumber = Number(cgpa);
    if (cgpa.trim() === "" || Number.isNaN(cgpaNumber)) {
      newErrors.cgpa = "CGPA must be a valid number.";
    } else if (cgpaNumber < 0 || cgpaNumber > 4) {
      newErrors.cgpa = "CGPA must be between 0 and 4.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent the default page refresh on submit

    const validationErrors = validate();
    setErrors(validationErrors);

    // If there are any error messages, stop here and let the user fix them.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const newStudent = {
      id: Date.now(), // simple unique id based on current timestamp
      name: name.trim(),
      department: department.trim(),
      cgpa: Number(cgpa),
      isActive: true, // new students default to active
    };

    onAddStudent(newStudent);

    // Clear the form after a successful submission.
    setName("");
    setDepartment("");
    setCgpa("");
    setErrors({});
  }

  return (
    <form className="student-form" onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">Add Student</h2>

      <div className="form-field">
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Nusrat Jahan"
        />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="e.g. CSE"
        />
        {errors.department && <p className="field-error">{errors.department}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="cgpa">CGPA</label>
        <input
          id="cgpa"
          type="text"
          inputMode="decimal"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          placeholder="e.g. 3.50"
        />
        {errors.cgpa && <p className="field-error">{errors.cgpa}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
