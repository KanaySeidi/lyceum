import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example({ question, answer }) {
  return (
    <div className="w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
      <Disclosure as="div" className="p-6">
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-hover:text-white/80">
                {question}
              </span>
              <ChevronDownIcon
                className={`w-[3.75rem] h-[3.75rem] fill-bordo transition-transform duration-200 ease-in-out group-hover:fill-black/100 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </DisclosureButton>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <DisclosurePanel static>
                <div className="text-sm/5 text-white/50">{answer}</div>
              </DisclosurePanel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
