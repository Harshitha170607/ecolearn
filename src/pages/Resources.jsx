import ResourceCard from "../components/ResourceCard";
const resources = [
  { title: "UN SDGs", summary: "United Nations Sustainable Development Goals.", link: "https://sdgs.un.org/goals" },
  { title: "Energy Saver", summary: "Official energy saving tips and guides.", link: "https://www.energy.gov/energysaver" }
];
export default function Resources() {
  return (
    <section>
      <div className="container">
        <h2 className="page-title">Resources</h2>
        <div className="resources-grid">
          {resources.map((r, i) => <ResourceCard key={i} resource={r} />)}
        </div>
      </div>
    </section>
  );
}
