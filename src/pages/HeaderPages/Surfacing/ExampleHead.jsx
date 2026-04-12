import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropdownMenu({ title, items }) {
  return (
    <div className="relative">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-gray-600">
              {title}
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
              <ul className="flex flex-col p-2 text-sm text-gray-700">
                {items.map((item, index) => (
                  <li key={index} className="py-1 hover:bg-gray-100 rounded">
                    <a href={item.href} className="block px-2">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
