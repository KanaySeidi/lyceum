import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Npa99 = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full px-4 pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="mx-auto w-full max-w-lg h-auto divide-y divide-gray-300 rounded-xl bg-white shadow-lg">
        {/* Первая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button
                onClick={() => handleToggle("webDeveloper")}
                className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
              >
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("npa99.title1")}
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
                      {t("npa99.title2")}
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          href: "https://drive.google.com/file/d/1hC1i5V3A1-JSxb7t472QE82IsvZVk9zb/view?usp=sharing",
                          text: t("npa99.ustav"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1xn0AFxpMAMIRDweCFZb9oYmTufhADFUh/view?usp=drive_link",
                          text: t("npa99.strategy"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1jXrRv7Jp-fHbydxSqtoiXZDacI0AqdXd/view?usp=drive_link",
                          text: t("npa99.certificate1"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1FRajf7LQyxu3yKnjV5NxZ4auzeELmcSv/view?usp=drive_link",
                          text: t("npa99.certificate2"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1PXOviW5Ef_xBAq0XaRJG8xHY4Iowpl-M/view?usp=drive_link",
                          text: t("npa99.certificate3"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1E1e2Qmah2EY3kOclJhnm5KEECsLTwW7x/view?usp=drive_link",
                          text: t("npa99.politics"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1oX3GtT9iZSBOySEHO2hREcSsqJk3axfF/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("npa99.mission"),
                        },
                        {
                          href: "https://drive.google.com/file/d/13FsB6tND0q7QQspRdnAWH3uhS5A9_4QA/view?usp=drive_link",
                          text: t("npa99.license1"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1PBQHY8nnoVjhbQ0hrekEcoDjnqrB_dKO/view?usp=drive_link",
                          text: t("npa99.license2"),
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
      </div>
    </div>
  );
};

export default Npa99;
