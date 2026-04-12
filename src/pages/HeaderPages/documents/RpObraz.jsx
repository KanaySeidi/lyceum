import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const RpObraz = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const russianGroupLinks = [
    {
      href: "https://docs.google.com/document/d/1Dd-szqypQ0QOFFbi3d_OwJ8EkT8UES5d/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.geometry_umk_rus",
    },
    {
      href: "https://docs.google.com/document/d/1bYQ2exw6nJiMBXrqsa9u9GdB1Le_GDyK/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.chio_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1L45fKtqaKsbprt_hnQi2r4_xmGgY1FQr/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.chemistry_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1FhGJLywVmCeggp30ihCJa0sigPXzP0rh/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.physics_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1Jkk8bXXyx1UKmYIH4xhbVDs5wvroDbsj/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.russian_language_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/17CDYwwJal1cgWZwH0cRxgO9gGtjXgwkU/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.russian_literature_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/18yJee1ygYo2eU8Jxaq90hurTYZ6KGRv0/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.world_history_kyrgyzstan_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1e8jZS1-zVherUC9jVD81aHQ2IN82cBxs/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.kyrgyz_language_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1MZCKH9KbjRCVYhbj1n8La__aACiuglEH/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.kyrgyz_literature_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1YYqMwTsf0Tr4aOFqyVhLke1vvoNonnI6/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.geography_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1VPouCaIHszpooqLJuS4msOiobf2tjgGn/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.biology_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1v5VOAnex-gf8Ndig5UwXKbzdXgNS2A1I/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.english_language_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1o3eNkh5YQP95_HKYOtJIZhkiPwxXNR2y/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.algebra_rp_rus",
    },
    {
      href: "https://docs.google.com/document/d/1jDoZZX2doGYsFqhpxWqftumkSUIjKQOK/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.dpm_rp_rus",
    },
  ];

  const kyrgyzGroupLinks = [
    {
      href: "https://docs.google.com/document/d/100U-oG59LCSeqbmgdsLcEMw-G6BG5U7A/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.geometry_umk_kg",
    },
    {
      href: "https://docs.google.com/document/d/1zTaihQ3fq3Qi-TEHQFId6lbzPxt2DoQ3/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",

      textKey: "links.algebra_umk_kg",
    },
    {
      href: "https://docs.google.com/document/d/1jMtKOFdvP0AS4N9iWMQwxa6h5ztZErqd/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.russian_language_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1RZWv4BWaK-YXjSpE_i5RA9WB6GkO9aeU/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.russian_language_umk_kg",
    },
    {
      href: "https://docs.google.com/document/d/1Sbgjc46-KdwAp-MsoCuXnHrE-7lBaciD/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.russian_literature_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1msqCkTBHdL1YlArztF4Ku2vmfDTNQ1pi/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.russian_literature_umk_kg",
    },
    {
      href: "https://docs.google.com/document/d/12c8jA-93eq3kwtf237iwvoXP27QhHv4R/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.chemistry_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1-kdX99I75CNLqopJRW7FvGVg6hn5CF8_/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.physics_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1C5F1P-TwDdMWBqRjO26dnUypy9i_rLOD/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.history_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/18p4Lrd8EdpHSpQMqVd8jekOE_zZrGc4J/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.kyrgyz_literature_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1aJoB0TRfQ9LQSHWcCEy8jGC3R0WdtENn/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.dpm_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/19bD0wBtHXa6gG2yAWZwj6UOb2qk04TNq/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.geography_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1j8VREkw9TvcVBjgdTWKpJJZT43B2J0TQ/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.biology_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1g2jJOSoOfPCtHRtgMdG3F79Xw_XCwjjp/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.human_society_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1TaY2MCO2kK_5Tl42JyfuMOCKMs5_s7r2/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.kyrgyz_language_rp_kg",
    },
    {
      href: "https://docs.google.com/document/d/1tfwBSzZ47Ftfer3HSS3UFI0rccBs7kI_/edit?usp=drive_link&ouid=101506021742149629101&rtpof=true&sd=true",
      textKey: "links.kyrgyz_language_umk_kg",
    },
  ];

  return (
    <div className="w-full px-4 pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <motion.button
        onClick={toggleContent}
        className="mx-auto flex items-center justify-between w-full max-w-lg px-4 py-2 text-lg font-semibold text-white bg-bordo rounded-lg shadow-md transition hover:bg-bordo-dark"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>
          {t("links.general_education_rp", {
            defaultValue: "РП общеобразовательный",
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
          className="mx-auto w-full max-w-lg h-auto divide-y divide-gray-300 rounded-xl bg-white shadow-lg mt-4"
        >
          {/* РП общеобразовательный (русская группа) */}
          <Disclosure>
            {({ open }) => (
              <div className="p-6">
                <Disclosure.Button
                  onClick={() => handleToggle("russianGroup")}
                  className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
                >
                  <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                    {t("links.general_education_rp_russian_group", {
                      defaultValue: "РП общеобразовательный (русская группа)",
                    })}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openSection === "russianGroup" ? -180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                  </motion.div>
                </Disclosure.Button>
                {openSection === "russianGroup" && (
                  <Disclosure.Panel static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <h1 className="text-3xl font-bold text-center mb-8">
                        {t("links.study_programs", {
                          defaultValue: "Учебные программы",
                        })}
                      </h1>
                      <div className="flex flex-col gap-2">
                        {russianGroupLinks.map(({ href, textKey }) => (
                          <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-bordo rounded-lg shadow-md transition"
                          >
                            {t(textKey, { defaultValue: textKey })}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </Disclosure.Panel>
                )}
              </div>
            )}
          </Disclosure>
          {/* РП общеобразовательный (кыргызская группа) */}
          <Disclosure>
            {({ open }) => (
              <div className="p-6">
                <Disclosure.Button
                  onClick={() => handleToggle("kyrgyzGroup")}
                  className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
                >
                  <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                    {t("links.general_education_rp_kyrgyz_group", {
                      defaultValue:
                        "РП общеобразовательный (кыргызская группа)",
                    })}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openSection === "kyrgyzGroup" ? -180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                  </motion.div>
                </Disclosure.Button>
                {openSection === "kyrgyzGroup" && (
                  <Disclosure.Panel static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <h1 className="text-3xl font-bold text-center mb-8">
                        {t("links.study_programs", {
                          defaultValue: "Учебные программы",
                        })}
                      </h1>
                      <div className="flex flex-col gap-2">
                        {kyrgyzGroupLinks.map(({ href, textKey }) => (
                          <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-bordo rounded-lg shadow-md transition"
                          >
                            {t(`${textKey}`, { defaultValue: textKey })}
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

export default RpObraz;
