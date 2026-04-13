import { Dialog } from "@headlessui/react";
import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  title,
  titledescription,
  triggerLabel = "Open dialog",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="focus:outline-none"
      >
        {triggerLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog as={Fragment} open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                style={{ background: "rgba(99,0,31,0.7)", backdropFilter: "blur(4px)" }}
                onClick={() => setIsOpen(false)}
              />

              {/* Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md"
              >
                <Dialog.Panel
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "#fff",
                    border: "2px solid #C4973A55",
                    boxShadow: "0 20px 60px rgba(99,0,31,0.35)",
                  }}
                >
                  {/* Header */}
                  <div
                    className="px-6 pt-6 pb-4"
                    style={{
                      background: "linear-gradient(135deg, #63001F 0%, #8B0032 100%)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-white text-lg font-bold">
                        {title}
                      </Dialog.Title>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5">
                    {titledescription && (
                      <div>{titledescription}</div>
                    )}
                  </div>

                  {/* Footer */}
                  <div
                    className="px-6 py-4 flex justify-end"
                    style={{ borderTop: "1px solid #63001F11" }}
                  >
                    <button
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #63001F, #8B0032)",
                        boxShadow: "0 4px 15px rgba(99,0,31,0.3)",
                      }}
                    >
                      Закрыть
                    </button>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
