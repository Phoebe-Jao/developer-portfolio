import WorksGrid from "../components/WorksGrid";
import worksData from "../data/works"

function Works() {
  return (
    <main>
      <div className="container py-15">
        <WorksGrid 
          works={worksData}
        />
      </div>
    </main>
  )
}

export default Works;