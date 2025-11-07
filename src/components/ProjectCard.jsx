export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h4>{project.title}</h4>
      <p>{project.idea}</p>
      <div className="project-meta">
        <span className="badge">Difficulty: {project.difficulty || "Medium"}</span>
      </div>
    </div>
  );
}
