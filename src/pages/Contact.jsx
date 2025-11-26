function Contact() {
  return (
    <main className="min-h-screen max-md:pt-15 pt-20 pb-[5.3rem]">
      <div class="w-full max-md:max-w-[90%] max-w-[70%] mx-auto bg-dark-blue/20 rounded-2xl backdrop-blur-lg border border-blue-400/30 bg-linear-to-br from-transparent to-blue/8">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
            <h2 class="mb-4 uppercase text-4xl tracking-tight font-extrabold text-center text-gradient dark:text-white">Contact Me</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" class="space-y-8">
                <div>
                  <label for="email" class="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div>
                  <label for="subject" class="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Your Message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button className="block transition-opacity duration-600 ease-in-out hover:opacity-50 mt-[2.4rem] rounded bg-gradient w-[14rem] uppercase text-dark-blue font-semibold text-[1.125rem] px-[1.9rem] py-[1rem] cursor-pointer">Send Message</button>
            </form>
        </div>
      </div>
    </main>
  )
}

export default Contact;