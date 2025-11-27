import toast from "react-hot-toast"
import ScrollTriggered from "../components/ScrollTriggered"
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    try {
      toast.success("Thank you for reaching out! \nYour message has been received.", {
        duration: 5000,
      });
      setForm({ email: "", subject: "", message: "" });
    } catch (err) {
      console.log("Error in signup form", err);

      toast.error("Something went wrong. Please try again later.", {
        duration: 5000,
      });
    }
  }

  return (
    <main className="min-h-screen max-md:pt-15 pt-20 pb-[5.3rem]">
      <ScrollTriggered>
        <div className="w-full max-md:max-w-[90%] max-w-[70%] mx-auto bg-dark-blue/20 rounded-2xl backdrop-blur-lg border border-blue-400/30 bg-linear-to-br from-transparent to-blue/8">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
              <h2 className="mb-4 uppercase text-4xl tracking-tight font-extrabold text-center text-gradient dark:text-white">Contact Me</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Fill out the form below and I’ll get back to you as soon as possible.</p>
              <form action="" onSubmit={handleFormSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                    <input onChange={handleChange} type="email" name="email" value={form.email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@sample.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input onChange={handleChange} type="text" name="subject" value={form.subject} id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tell me more about what you're looking for" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-gray-300">Your Message</label>
                    <textarea onChange={handleChange} name="message" value={form.message} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your message..."></textarea>
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