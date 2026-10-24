function StudentCard({
  student,
  onRemove,
  onToggleStatus
}) {
  return (
    <div
      className={
        student.status === "completed"
          ? "student-card completed"
          : "student-card"
      }
    >
      <div>
        <h4>
          {student.name}
        </h4>
        <p>
          <strong>Course:</strong> {student.course}
        </p>
        <p>
          <strong>Type:</strong>{" "}
          {student.referral
            ? "Referral"
            : "Direct"}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {student.status}
        </p>
      </div>
      <div className="student-buttons">
        <button
          className="btn btn-success"
          onClick={() => onToggleStatus(student.id)}
        >
          {student.status === "active"
            ? "Mark Completed"
            : "Mark Active"}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onRemove(student.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default StudentCard;