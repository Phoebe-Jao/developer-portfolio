function AboutCard({ item }) {
  return (
    <div className="relative w-full max-md:max-w-full max-w-142.5 overflow-hidden bg-dark-blue/30 backdrop-blur-lg border border-gold-400/30 bg-linear-to-br from-transparent to-blue/20 rounded-2xl p-7">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient"></div>
      <h3 className="text-[1.625rem] text-gradient font-semibold">{ item.title }</h3>
      <p className="text-[1rem]">{ item.company }</p>
      <p className="text-[0.875rem] opacity-70 pt-1 pb-2">{ item.dateRange }</p>
      <p className="text-[0.95rem] text-justify">{ item.desc }</p>
    </div>
  )
}

export default AboutCard;