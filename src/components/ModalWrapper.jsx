import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function ModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      
      <AnimatePresence>
        { isOpen && (
          <Modal 
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ModalWrapper;