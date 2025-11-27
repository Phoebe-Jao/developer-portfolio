import ScrollTriggered from "../components/ScrollTriggered";

function Contact() {
  return (
    <main className="min-h-screen max-md:pt-15 pt-20 pb-[5.3rem]">
      <ScrollTriggered>
        <div className="w-full max-md:max-w-[90%] max-w-[70%] mx-auto bg-dark-blue/20 rounded-2xl backdrop-blur-lg border border-blue-400/30 bg-linear-to-br from-transparent to-blue/8">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
              <h2 className="mb-4 uppercase text-4xl tracking-tight font-extrabold text-center text-gradient dark:text-white">Contact Me</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Fill out the form below and I’ll get back to you as soon as possible.</p>
              <form action="#" className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@sample.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tell me more about what you're looking for" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Your Message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your message..."></textarea>
                  </div>
                  <button className="block transition-opacity duration-600 ease-in-out hover:opacity-50 mt-[2.4rem] rounded bg-gradient w-[14rem] uppercase text-dark-blue font-semibold text-[1.125rem] px-[1.9rem] py-[1rem] cursor-pointer">Send Message</button>
              </form>
          </div>
        </div>
      </ScrollTriggered>
    </main>
  )
}

export default Contact;