import { AnimatePresence } from "framer-motion";
import ScrollTriggered from "./ScrollTriggered";
import { useState } from "react";
import Modal from "./Modal";

function WorkCard({ work }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollTriggered>
      <div onClick={() => setIsOpen(true)} className="p-1 border-2 border-gold-400 cursor-pointer">
        <div className="relative">
          <img src={`../assets/images/works/${work.image}`} alt={work.title} className="max-md:min-h-40 min-h-50" />
          <p className="absolute bottom-0 w-full bg-dark-blue/80 p-1">{ work.title }</p>
        </div>
      </div>
      <AnimatePresence>
        { isOpen && (
          <Modal
            onClose={() => setIsOpen(false)}
            work={work}
          />
        )}
      </AnimatePresence>
    </ScrollTriggered>
  )
}

export default WorkCard;