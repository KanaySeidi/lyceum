import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const NPAPosition = () => {
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
                onClick={() => handleToggle("regulationsPlit99")}
                className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
              >
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.regulationsPlit99")}
                </span>
                <motion.div
                  animate={{
                    rotate: openSection === "regulationsPlit99" ? -180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                </motion.div>
              </Disclosure.Button>
              {openSection === "regulationsPlit99" && (
                <Disclosure.Panel static>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                  >
                    <p className="text-xl font-bold text-bordo text-center mb-4">
                      {t("docsdescriptions.regulationsPlit99")}
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          href: "https://docs.google.com/document/d/1eW-1q25TNH3XA3-az2hA-h8c5bBsZFDK/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.portfolioStructure"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1R1U-vbKM9ZYV-Uk1PHkDQ0nelO-wXiUU/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.opLayoutExample"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1gDBKsq0328zQ-Ni-LoN59xbvZ_9xllQo/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.umkRegulation"),
                        },
                        {
                          href: "https://docs.google.com/document/d/11dRFzf94CwFWgqm3twwu0-09Vbmua4C5/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.sruRegulation"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1ZEq0wO1hJfK8n52Tuu9EyQHtuKf2vCPE/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.poCheckworksRegulation"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1vjdorFbFaZz0dH7C0RqiUhZIHQ3BwrZ4/view?usp=drive_link",
                          text: t("links.kyrgyzGamesRegulation"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1be74u4ZhfBASPPjSZ_Xinq9MEerl8oIX/view?usp=drive_link",
                          text: t("links.miniFootballRegulation"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1h2FpV_4-CB2q6cjFuY6zCpuavW91-Z2L/view?usp=drive_link",
                          text: t("links.volleyballRegulation"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1tESSJxMRXqBsn14fQmWIyWjFWqCJ5erd/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.toLessonPlanRegulation"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1FGPOgfRhaOwxwKNtNzRoTTqLznQgluVV/view?usp=drive_link",
                          text: t("links.attendanceRegulation"),
                        },
                        {
                          href: "https://docs.google.com/document/d/19Dw51UwfihFRU62SI_LM-Ve7FE7BGL32/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.classAttendanceRegulation"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1x1BrAX6W37gAW-qkPQcpkrlVPO-Icz9F/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.professionOpRegulation"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1lnaGcyz8-ReyU0_vEIHquISTACYjPFhF/view?usp=drive_link",
                          text: t("links.monitoringRegulation"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1MDnKd86IOky0ppOuMt6QFo7CtXyoYwKd/view?usp=drive_link",
                          text: t("links.qualityPolicy"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1KmpaXPkQiByqnkV78ilCAR57CiaAol1Q/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.diplomaMethodGuidelines"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1z8jy57DbuL1MybNbukvjMXg15n87mY8f/view?usp=drive_link",
                          text: t("links.poLessonMethodology"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1BhlZAyxVd_6D_jKNDd9whLCxaAfOgxXl/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.toLessonMethodology"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1WmQ7KbwYeqG-hfffX7_6x29m5c_ZC2ZG/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.toPlanTemplateScan"),
                        },
                        {
                          href: "https://docs.google.com/document/d/1iw5DhMaUrKKWLu9wmL4pmhuVMToSFB4J/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
                          text: t("links.poPlanTemplateScan"),
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

export default NPAPosition;
