export default function LessonCard({ lesson, onOpen }) {
  return (
    <div className="lesson-card" onClick={() => onOpen && onOpen(lesson.id)}>
      <div className="lesson-left">
        <div className="lesson-title">{lesson.title}</div>
        <div className="lesson-summary">{lesson.summary}</div>
      </div>
      <div className="lesson-meta">
        <div className="lesson-duration">{lesson.duration || "—"}</div>
        <button className="btn-outline">Open</button>
      </div>
    </div>
  );
}
