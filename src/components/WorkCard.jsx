import ScrollTriggered from "./ScrollTriggered";

function WorkCard({ work }) {
  return (
    <ScrollTriggered>
      <div className="p-1 border-2 border-gold-400 cursor-pointer">
        <div className="relative">
          <img src={`../assets/images/works/${work.image}`} alt={work.title} className="min-h-60" />
          <p className="absolute bottom-0 w-full bg-dark-blue/80 p-1">{ work.title }</p>
        </div>
      </div>
    </ScrollTriggered>
  )
}

export default WorkCard;