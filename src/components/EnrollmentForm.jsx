import { useState } from "react";
function EnrollmentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [referral, setReferral] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    if (name === "" || course === "") {
      alert("Please enter name and select course");
      return;
    }
    const student = {
      name: name,
      course: course,
      referral: referral,
    };
    onAddStudent(student);
    setName("");
    setCourse("");
    setReferral(false);
  }
  return (
    <div className="form-box">
      <h3 className="mb-4">
        Enroll Student
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Course
          </label>
          <select
            className="form-select"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          >
            <option value="">
              Select Course
            </option>
            <option value="Java">
              Java
            </option>
            <option value="React">
              React
            </option>
            <option value="Python">
              Python
            </option>
            <option value="Web Development">
              Web Development
            </option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={referral}
            onChange={(event) =>
              setReferral(event.target.checked)
            }
          />
          <label className="form-check-label">
            Referred by someone
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Enroll Student
        </button>
      </form>
    </div>
  );
}

export default EnrollmentForm;