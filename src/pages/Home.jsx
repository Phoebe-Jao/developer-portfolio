import { Link } from "react-router-dom"
import image from "../assets/images/hero_img.png"
import WorksGrid from "../components/WorksGrid"
import worksData from "../data/works"

function Home() {
  return (
    <main className="min-h-screen pt-17.5 pb-[5.3rem]">
      <section className="container max-md:flex-col max-md:gap-6 flex justify-center items-center gap-[5%]">
        <div className="max-md:max-w-full max-w-[50%]">
          <h1 className="max-md:text-[2rem] min-[769px]:2xl:text-6xl text-4xl font-cinzel font-medium text-gradient leading-relaxed bg-clip-text">
            Hi, I'm Phoebe Jao<br />
            <span className="font-extrabold max-md:text-5xl min-[769px]:2xl:text-5xl text-5xl">Front End Developer</span>
          </h1>
          <p className="text-justify max-md:text-[1rem] min-[769px]:2xl:text-[1.375rem] text-[1.2rem] max-md:pt-[0.7rem] pt-[2.3rem] leading-loose">A Front End Developer based in the Philippines, who is passionate about building clean, responsive websites and constantly improving my skills in web development.</p>
          <Link to="/about" className="block transition-opacity duration-600 ease-in-out hover:opacity-50 mt-[2.4rem] rounded bg-gradient w-[10.625rem] uppercase text-dark-blue font-medium text-[1.125rem] px-[1.9rem] py-[1rem]">SEE MORE</Link>
        </div>
        <img
          src={image}
          alt="Description"
          className="w-full max-md:max-w-[90%] max-w-[50%] h-auto"
        />
      </section>
      <section className="container pt-20">
        <div className="uppercase max-md:flex-col flex max-md:items-start max-md:justify-start justify-end items-center max-md:pb-5 pb-8">
          <h3 className="text-gradient font-bold text-[1.75rem] pr-[1.7rem] relative max-md:after:rotate-90 max-md:after:left-[8%] max-md:after:top-1/2 after:absolute after:top-0 after:bottom-0 after:right-0 after:content-[''] after:h-full after:w-px after:gradient-after">Recent Works</h3>
          <Link to="/works" className="uppercase text-[1rem] max-md:pt-2 max-md:pl-0 pl-[1.7rem] transition-opacity duration-600 ease-in-out hover:opacity-50">View More</Link>
        </div>
        <WorksGrid
          works={worksData}
          limit={3}
        />
      </section>
    </main>
  )
}

export default Home;