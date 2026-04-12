import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const NpaKr = () => {
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
                onClick={() => handleToggle("normativeActsKR")}
                className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
              >
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.normativeActsKR")}
                </span>
                <motion.div
                  animate={{
                    rotate: openSection === "normativeActsKR" ? -180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                </motion.div>
              </Disclosure.Button>
              {openSection === "normativeActsKR" && (
                <Disclosure.Panel static>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                  >
                    <p className="text-xl font-bold text-bordo text-center mb-4">
                      {t("docsdescriptions.ActsPLIT99")}
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          href: "https://drive.google.com/file/d/16FzDn88xh1TJ-UJns9zl5m8fbUCfV8M2/view?usp=sharing",
                          text: t("links.ActsExam"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1e7dw6zgthgXeMOPCTjavjVtJNmfXMZ_m/edit?usp=sharing&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.PresidentialDecree"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1Hh3XcqXCgPVmrfuvRipPqgraK9TkpXnX/edit?usp=sharing&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.GovernmentDecree"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1pxg1mcwTlotTPgS70RXXk6AojLlvCjLO/edit?usp=sharing&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.CabinetOfMinisters"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1VJyG1rW8LilDz8wjWzImp5MKnOXZycx7/edit?usp=sharing&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.IECRegulations"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1GB9-J71BPT4jbXhWS0xqcMDb5bAnQ8dm/view?usp=sharing",
                          text: t("links.KyrgyzStateEdDocs2025"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1fHcrqSCUTjkh-xuvtRx5tS7A98_iqp65/view?usp=sharing",
                          text: t("links.StateStandardTemplate"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1npCkhvD166_ZJZwFoLmm6-Bx6sQ9ClsT/view?usp=sharing",
                          text: t("links.IGA-25"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1eP2r35tZO01C8hrFX_Il8hf4SlAQSz8M/edit?usp=sharing&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.LawsOfTheKR"),
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

export default NpaKr;
