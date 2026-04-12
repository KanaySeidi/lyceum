import { Dialog } from "@headlessui/react";
import { useState, Fragment } from "react";

export default function Modal({
  title,
  titledescription,
  triggerLabel = "Open dialog",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-lg rounded-xl bg-white/5 p-6">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-black hover:bg-black/30 focus:outline-none"
      >
        {triggerLabel}
      </button>

      <Dialog as={Fragment} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-10 bg-black flex items-center justify-center">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 text-burgundy transition-all duration-300 border-4 border-burgundy shadow-[0_0_15px_5px_#800020] shadow-bordo-glow">
            {title && (
              <Dialog.Title className="text-burgundy text-lg font-bold">
                {title}
              </Dialog.Title>
            )}
            {titledescription && (
              <div className="mt-2 text-burgundy">{titledescription}</div>
            )}
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-600 focus:outline-none"
              >
                Закрыть
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
