import ProjectCard from "../components/ProjectCard";
const projects = [
  { title: "Plastic-Free Challenge", idea: "Avoid single use plastics for 7 days.", difficulty: "Easy" },
  { title: "Build a Solar Charger", idea: "Assemble a small charger for your phone.", difficulty: "Medium" },
  { title: "Community Compost", idea: "Start a compost bin for organic waste.", difficulty: "Easy" }
];
export default function Projects() {
  return (
    <section>
      <div className="container">
        <h2 className="page-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}
