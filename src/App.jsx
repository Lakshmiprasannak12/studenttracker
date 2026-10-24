import { useEffect, useState } from "react";
import EnrollmentForm from "./components/EnrollmentForm";
import StudentCard from "./components/StudentCard";
import "./App.css";
function App() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  function addStudent(student) {
    const newStudent = {
      ...student,
      id: Date.now(),
      status: "active"
    };
    setStudents([...students, newStudent]);
  }
  function removeStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );
    setStudents(updatedStudents);
  }
  function toggleStatus(id) {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          status:
            student.status === "active"
              ? "completed"
              : "active"
        };

      }
      return student;
    });
    setStudents(updatedStudents);
  }
  const activeCount = students.filter(
    (student) => student.status === "active"
  ).length;
  const completedCount = students.filter(
    (student) => student.status === "completed"
  ).length;
  const filteredStudents = students.filter((student) => {
    if (filter === "all") {
      return true;
    }
    return student.status === filter;
  });
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        Student Enrollment Tracker
      </h1>
      <EnrollmentForm onAddStudent={addStudent} />
      <div className="summary-box">
        <h4>
          {activeCount} active, {completedCount} completed
        </h4>
        <p>
          Open for: {seconds}s
        </p>
      </div>
      <div className="filter-buttons">
        <button
          className="btn btn-primary"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="btn btn-success"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div className="mt-4">
        {filteredStudents.length === 0 ? (
          <p className="text-center">
            No students enrolled yet
          </p>
        ) : (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onRemove={removeStudent}
              onToggleStatus={toggleStatus}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default App;