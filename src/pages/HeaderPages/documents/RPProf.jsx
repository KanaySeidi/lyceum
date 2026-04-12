import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const RPProf = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="w-full px-4 pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <motion.button
        onClick={toggleContent}
        className="mx-auto flex items-center justify-between w-full max-w-lg px-4 py-2 text-lg font-semibold text-white bg-bordo rounded-lg shadow-md transition hover:bg-bordo-dark"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>
          {t("docsprograms.Profession", {
            defaultValue: "Профессия",
          })}
        </span>
        <motion.div
          animate={{ rotate: isContentVisible ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="h-8 w-8 text-white" />
        </motion.div>
      </motion.button>

      {isContentVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="mx-auto w-full max-w-lg h-auto rounded-xl bg-white shadow-lg mt-4"
        >
          {/* profession */}
          <Disclosure>
            {({ open }) => (
              <div className="p-6">
                <Disclosure.Button
                  onClick={() => handleToggle("webDeveloper")}
                  className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
                >
                  <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                    {t("docsprograms.Profession", {
                      defaultValue: "Профессия",
                    })}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openSection === "webDeveloper" ? -180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                  </motion.div>
                </Disclosure.Button>
                {openSection === "webDeveloper" && (
                  <Disclosure.Panel static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <p className="text-xl font-bold text-bordo text-center mb-4">
                        {t("docsdescriptions.Profession", {
                          defaultValue: "Профессия",
                        })}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1CG5BF0Sa7NqcWNOjew5HaUXbmldKMRnk/edit?usp=sharing&ouid=101506021742149629101&rtpof=true&sd=true",
                            text: t("links.POPD", { defaultValue: "ПОПД" }),
                          },

                          {
                            href: "https://docs.google.com/document/d/1J50Q5gyum2TlWxqsAGRHEUqETuElULxD/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                            text: t("links.Security", {
                              defaultValue: "Безопасность",
                            }),
                          },
                          {
                            href: "https://docs.google.com/document/d/1sPo-XwTclwFwbJsk971IVyRwBbgwiMml/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                            text: t("links.Profession", {
                              defaultValue: "Профессия",
                            }),
                          },
                        ].map(({ href, text }) => (
                          <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-bordo rounded-lg shadow-md transition"
                          >
                            {text}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </Disclosure.Panel>
                )}
              </div>
            )}
          </Disclosure>
        </motion.div>
      )}
    </div>
  );
};

export default RPProf;
