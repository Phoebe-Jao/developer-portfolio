import WorkCard from "./WorkCard";

function WorksGrid({ works, limit }) {
  const sortedWorks = works.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const displayedWorks = limit ? sortedWorks.slice(0, limit) : works;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedWorks.map((work, i) => (
        <WorkCard key={i} work={work} />
      ))}
    </div>
  )
}

export default WorksGrid;