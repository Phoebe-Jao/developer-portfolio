import linkedin from "../assets/images/linkedin.png"
import website from "../assets/images/website.png"
import email from "../assets/images/email.png"

function Footer() {
  return (
    <footer className="border-t border-dark-blue mt-8">
      <div className="w-full max-w-140 mx-auto text-center pt-14 pb-8">
        <h1 className="uppercase text-gradient text-[1.75rem] font-bold">Let's connect</h1>
        <p>Want to reach out? Get in touch</p>
        <div className="flex justify-center gap-5 py-6">
          <a href="https://www.linkedin.com/in/phoebe-jao-2b1548195/">
            <img src={linkedin} alt="LinkedIn" className="max-w-12.5 h-auto transition-opacity duration-600 ease-in-out hover:opacity-50" />
          </a>
          <a href="https://github.com/Phoebe-Jao">
            <img src={website} alt="Github" className="max-w-12.5 h-auto transition-opacity duration-600 ease-in-out hover:opacity-50" />
          </a>
          <a href="mailto:jaophoebe@gmail.com">
            <img src={email} alt="Email" className="max-w-12.5 h-auto transition-opacity duration-600 ease-in-out hover:opacity-50" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;