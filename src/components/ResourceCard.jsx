export default function ResourceCard({ resource }) {
  return (
    <div className="resource-card">
      <h4>{resource.title}</h4>
      <p>{resource.summary}</p>
      <a href={resource.link} target="_blank" rel="noreferrer" className="btn-link">Open</a>
    </div>
  );
}
