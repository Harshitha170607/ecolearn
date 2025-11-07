import lessons from "../data/lessons.json";
import LessonCard from "../components/LessonCard";
import { useAuth } from "../context/AuthContext";

export default function Lessons() {
  const { user } = useAuth();
  const handleOpen = (id) => {
    if (!user) return alert("Please login to open lessons.");
    alert(`Open lesson ${id}`);
  };
  return (
    <section>
      <div className="container">
        <h2 className="page-title">Lessons</h2>
        <div className="lessons-grid">
          {lessons.map((l) => (
            <LessonCard key={l.id} lesson={l} onOpen={handleOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
