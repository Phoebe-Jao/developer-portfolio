import { motion } from "framer-motion"

function Modal({ onClose, work }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-1"
      onClick={ onClose }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.75, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
      <div className="relative max-md:container bg-white text-black pt-14 p-8 rounded-2xl max-w-150 w-full z-10 shadow-lg text-[1.4rem]">
        <button className="absolute top-4 right-6 border-none bg-transparent text-[1.5rem] cursor-pointer text-gray-500 hover:text-dark-blue transition-all duration-400" onClick={onClose}>
          ✕
        </button>
        <img src={`../assets/images/works/${work.image}`} alt={work.title} className="max-md:min-h-30 min-h-60 mb-[1.5rem]" />
        <h1 className="max-md:text-[1.2rem] text-[1.8rem] font-semibold mb-[0.8rem]">{ work.title }</h1>
        <p className="max-md:text-[0.85rem] text-[1rem] text-justify mb-[0.8rem]">{ work.description }</p>
        <div className="flex flex-wrap gap-2 max-md:pb-4 pb-8 mt-4 max-md:mb-7 mb-12 border-b border-b-black/50">
          {
            work.tags.map((tag, i) => (
              <span key={i} className="max-md:text-[0.85rem] text-[1rem] py-2 px-4 rounded-4xl bg-blue/50">{ tag }</span>
          ))}
        </div>
        <p className="max-md:text-[0.85rem] text-[1rem] font-semibold">Link: <a href={work.url} target="_blank" className="font-normal text-dark-blue underline">{ work.url }</a></p>
      </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal;