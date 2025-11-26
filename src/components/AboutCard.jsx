function AboutCard({ item }) {
  return (
    <div className="relative w-full max-md:max-w-full max-w-142.5 overflow-hidden bg-dark-blue/30 backdrop-blur-lg border border-gold-400/30 bg-linear-to-br from-transparent to-blue/20 rounded-2xl p-7">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient"></div>
      <h3 className="max-md:text-[1.3rem] text-[1.625rem] text-gradient font-semibold max-md:leading-6 max-md:pb-2">{ item.title }</h3>
      <p className="max-md:text-[0.87rem] text-[1rem]">{ item.company }</p>
      <p className="max-md:text-[0.8rem]  text-[0.875rem] opacity-70 max-md:py-1 pt-1 pb-2">{ item.dateRange }</p>
      <p className="max-md:text-[0.87rem] text-[0.95rem] text-justify">{ item.desc }</p>
    </div>
  )
}

export default AboutCard;