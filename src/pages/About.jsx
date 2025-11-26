import image from "../assets/images/about_img.png"
import AboutCard from "../components/AboutCard"
import experienceData from "../data/experience"

function About() {
  const allImages = import.meta.glob('/src/assets/images/*', { eager: true });

  const needed = Array.from({ length: 12 }, (_, i) =>
    `about_icon-${String(i + 1).padStart(2, '0')}.png`
  );

  const images = Object.entries(allImages)
    .filter(([path]) => needed.some(name => path.endsWith(name)))
    .map(([_, mod]) => mod.default);

  return (
    <main className="min-h-screen max-md:pt-15 pt-20 pb-[5.3rem]">
      <section className="container">
        <div className="max-md:flex-col flex max-md:gap-6 gap-15">
          <div className="relative max-md:max-w-full max-w-[25%]">
            <div className="rounded-2xl overflow-hidden">
              <img src={image} alt="Phoebe Jao" className="w-full h-full" />
            </div>
            <div className="rounded-2xl overflow-hidden rotate-10 absolute -z-1 top-0 opacity-35">
              <img src={image} alt="Phoebe Jao" className="w-full h-full" />
            </div>
          </div>
          <div className="max-md:max-w-full max-w-[75%]">
            <h1 className="font-cinzel font-extrabold max-md:text-4xl min-[769px]:2xl:text-5xl text-5xl text-gradient py-3">About Me</h1>
            <p className="text-justify max-md:max-w-full max-w-200 max-md:leading-6 leading-7 pb-2">
              Hello, my name is Phoebe Jao, a Front End Developer based in the Philippines.
            </p>
            <p className="text-justify max-md:max-w-full max-w-200 max-md:leading-6 leading-7 pb-4">
              I am passionate about building clean, responsive websites and constantly improving my skills in web development. With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning designs into functional digital experiences. I am eager to learn, grow, and contribute to innovative projects while honing my skills.
            </p>
            <a href="/assets/pdf/JAO-PHOEBE-CV-2025.pdf" target="_blank" className="block transition-opacity duration-600 ease-in-out hover:opacity-50 mt-[2.4rem] rounded bg-gradient w-32 uppercase text-dark-blue font-semibold text-[1.125rem] px-[1.9rem] py-3 cursor-pointer">My CV</a>
          </div>
        </div>
      </section>
      <section className="py-5 max-md:mb-3 mb-7">
        <div className="py-10">
          <h2 className="font-cinzel text-[1.75rem] font-bold text-gradient text-center">Skills</h2>
          <p className="max-md:max-w-[80%] max-md:mx-auto text-[1rem] text-center">I strive to never stop learning and improving.</p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-x-[0.7rem] gap-y-4 w-full max-w-93.5 mx-auto">
          {images.map((src, i) => (
            <div className="w-11 h-11" key={i}>
              <img src={src} alt={`skill ${i+1}`} className="w-full h-full" />
            </div>
          ))}
        </div>
      </section>
      <section className="py-5 max-md:mb-3 mb-7">
        <div className="py-10">
          <h2 className="font-cinzel text-[1.75rem] font-bold text-gradient text-center">Work Experience</h2>
          <p className="max-md:max-w-[80%] max-md:mx-auto text-[1rem] text-center">An outline of my professional background.</p>
        </div>
        <div className="relative">
          <div className="flex max-md:flex-wrap justify-center items-stretch gap-x-5 max-md:gap-y-6 gap-y-[1.1rem] w-full max-w-[90%] mx-auto">
            {
              experienceData.map((item, i) => (
                <AboutCard 
                  key={i}
                  item={item}
                />
            ))}
          </div>
          <div className="bg-radial-gradient top-1/2 left-1/2 -translate-1/2 opacity-30"></div>
        </div>
      </section>
    </main>
  )
}

export default About;