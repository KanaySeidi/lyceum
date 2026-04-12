import React, { useState, useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import fs from "fs"; // Импорт для работы с файлами (Node.js)

const DocsAdmin = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);
  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem("sections");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: "webDeveloper",
            titleKey: "docsprograms.webDeveloper",
            descriptionKey: "docsdescriptions.webDeveloper",
            links: [
              {
                href: "https://docs.google.com/document/d/1NhzXsQGtkmTcY4F9ELCsUtu65J2rt1m8/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/19X-0psvprqfatCazXlzywb3kpr46YXtH/edit",
                textKey: "links.programmingBasics",
              },
              {
                href: "https://docs.google.com/document/d/1vk6sZD1kuYXsJwMAqHf_bt8rP0m0D7ay/edit",
                textKey: "links.oop",
              },
              {
                href: "https://docs.google.com/document/d/11MI0zxKxd-lwFsBByaqiSGJ8rxzdzRSB/edit",
                textKey: "links.programmingLibraries",
              },
              {
                href: "https://docs.google.com/document/d/1Hud1xOyhPHvIzZVSoGtygZsZ40G4bK1O/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "frontendDeveloper",
            titleKey: "docsprograms.frontendDeveloper",
            descriptionKey: "docsdescriptions.frontendDeveloper",
            links: [
              {
                href: "https://docs.google.com/document/d/1-7AHVcrr0nKJ6gWFady_TSnIwZqC0T6b/edit",
                textKey: "links.programmingTechnologies",
              },
              {
                href: "https://docs.google.com/document/d/1r7SkZYe_aXwTmU5pzsqZalIcRB_bYCIe/edit",
                textKey: "links.uiDesign",
              },
              {
                href: "https://docs.google.com/document/d/1DN5D05YzyqTLfI69_N5vdCbm2E9pnLaE/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1m29MgqL4bWXHK1UtAn-lL1cicIdg572/edit",
                textKey: "links.programmingBasics",
              },
              {
                href: "https://docs.google.com/document/d/19eOyunLCjFNEmNrpXusCRizSMXWgXlMr/edit",
                textKey: "links.programmingLibraries",
              },
              {
                href: "https://docs.google.com/document/d/1YmnNmuH4IlHT1GfdAoSAQSi3s3Tqd8eo/edit",
                textKey: "links.itProjectManagement",
              },
              {
                href: "https://docs.google.com/document/d/1ryyTOQM3nQ-cyMppFiy3wbCrxSMXHEnv/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "backendDeveloper",
            titleKey: "docsprograms.backendDeveloper",
            descriptionKey: "docsdescriptions.backendDeveloper",
            links: [
              {
                href: "https://docs.google.com/document/d/1gQch3nkAiLiWuKwH7h4YhERiFXMabKM4/edit",
                textKey: "links.programmingTechnology",
              },
              {
                href: "https://docs.google.com/document/d/1eJehNZa11AnzpdHl-2JQNXQ19QI62BkA/edit",
                textKey: "links.itManagement",
              },
              {
                href: "https://docs.google.com/document/d/1Vi1YZvapyjA5WVwUVZuAhGmVqSXu1GTl/edit",
                textKey: "links.algorithmsAndDataStructures",
              },
              {
                href: "https://docs.google.com/document/d/1-oy3rGrIwdd2GD_b2TaRiPS_fBcsfk5F/edit",
                textKey: "links.oop",
              },
              {
                href: "https://docs.google.com/document/d/1SBXfMmGF4IgO6deLBsHetRm1b8GMx2AV/edit",
                textKey: "links.databases",
              },
              {
                href: "https://docs.google.com/document/d/1c8c5deMUy2r395AfUOL0caNTqAPb0b11/edit",
                textKey: "links.vocationalEducation",
              },
              {
                href: "https://docs.google.com/document/d/1TMN-EEHt3QrZgCnprGu3U-8tEzC4muPfGuXcWf5AILg/edit",
                textKey: "links.industrialTraining",
              },
            ],
          },
          {
            id: "carMechanic",
            titleKey: "docsprograms.carMechanic",
            descriptionKey: "docsdescriptions.carMechanic",
            links: [
              {
                href: "https://docs.google.com/document/d/1mOfMbXNSul5Q4UawUDnqYMnUA58jXTP0/edit",
                textKey: "links.electronicsBasics",
              },
              {
                href: "https://docs.google.com/document/d/1FLF5hhDPTe-160ljXx-t2WbHFY9BTgVm/edit",
                textKey: "links.technicalDrawing",
              },
              {
                href: "https://docs.google.com/document/d/1w687RWTtx9DLJ3mRW3ZzVunM40iYihSk/edit",
                textKey: "links.carMaintenance",
              },
              {
                href: "https://docs.google.com/document/d/1F8bsOVywrBZUX70QX95i5gzfQCfrWPWJ/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1c4hepS71Gm-FlNw1nmTBXdRjKVpnmsO2/edit",
                textKey: "links.carDevices",
              },
              {
                href: "https://docs.google.com/document/d/1m166_fVi6yMkF10kd7MG2kDevoNiNv2h/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "designTechnology",
            titleKey: "docsprograms.designTechnology",
            descriptionKey: "docsdescriptions.designTechnology",
            links: [
              {
                href: "https://docs.google.com/document/d/18Zw_RFqBCOdOs3af6NzFjYvIN0WtyeHz/edit",
                textKey: "links.graphicDesignBasics",
              },
              {
                href: "https://docs.google.com/document/d/1yAvcdJ_Mb6gYanZ5eQk2n1I-27JvjFpE/edit",
                textKey: "links.compositionAndColor",
              },
              {
                href: "https://docs.google.com/document/d/14Uz-32ujp5QgTvcqArNAbMo2F1p0sjA5/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1Wy_jfOuav42YVQvm3fsyp3Ah0gL7uC04/edit",
                textKey: "links.designIT",
              },
            ],
          },
          {
            id: "systemAdministrator",
            titleKey: "docsprograms.systemAdministrator",
            descriptionKey: "docsdescriptions.systemAdministrator",
            links: [
              {
                href: "https://docs.google.com/document/d/1M-v5aLNjPXCUFSkkW1e9Vc_vad3bEz38/edit",
                textKey: "links.networkSoftware",
              },
              {
                href: "https://docs.google.com/document/d/1OtwZPwEhDdRJZe_zEEA_zl6sDWbWV3kf/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1R1keJdos8NwzVBoi047xlHQrctBFzoI1/edit",
                textKey: "links.operatingSystems",
              },
              {
                href: "https://docs.google.com/document/d/1xFK6gT_YTHWVzB0WBs045QU6PqFUadGQ/edit",
                textKey: "links.pcArchitecture",
              },
              {
                href: "https://docs.google.com/document/d/10w9ZwLxBIgcj1SlicDP31JZOxZJPh89v/edit",
                textKey: "links.databases",
              },
              {
                href: "https://docs.google.com/document/d/12QWVLV9WEs5UYUny9PPdWsNaiYGaNPih/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "mechatronicsOperator",
            titleKey: "docsprograms.mechatronicsOperator",
            descriptionKey: "docsdescriptions.mechatronicsOperator",
            links: [
              {
                href: "https://docs.google.com/document/d/1h8bv587orgXUuYnqY6ktmLMFK7wtFn0D/edit",
                textKey: "links.informatics",
              },
              {
                href: "https://docs.google.com/document/d/14UNQ4Zu4BbeMtfQAri10RZmXegOm0NTr/edit",
                textKey: "links.mechatronicsProgramming",
              },
              {
                href: "https://docs.google.com/document/d/1-ZM5eh9qotKsFAfRuyN-oIvUcY9qzZVe/edit",
                textKey: "links.mechatronicsAssembly",
              },
              {
                href: "https://docs.google.com/document/d/1R6gQkFHPUUaE4k4ecLrG0uGQlFL2edf-/edit",
                textKey: "links.computingBasics",
              },
              {
                href: "https://docs.google.com/document/d/1tJ6PssJ0PoW4FqtxuW5Q9DmShjgtamif/edit",
                textKey: "links.materialsScience",
              },
              {
                href: "https://docs.google.com/document/d/1tib19K37KGErcUHS6ns123juNfeqyMYR/edit",
                textKey: "links.engineeringGraphics",
              },
              {
                href: "https://docs.google.com/document/d/1guiiIHpeAlG3ZAxALD-cIooX9F6KRW4W/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "mechatronics",
            titleKey: "docsprograms.mechatronics",
            descriptionKey: "docsdescriptions.mechatronics",
            links: [
              {
                href: "https://docs.google.com/document/d/1ZDBjnd0AP2B3bfrc3Sq4NePYWZ8lbqUT/edit",
                textKey: "links.hydraulicsAndPneumatics",
              },
              {
                href: "https://docs.google.com/document/d/1koHK83GDLEKIt2phKkxICT2HJK2LGzcF/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/15oIrjp8m4EDYxpaYVOhxJNZEHJhFWRr5/edit",
                textKey: "links.materialsScience",
              },
              {
                href: "https://docs.google.com/document/d/1B_e28gcXtfwW74-8DUj3XJNd8NWYj_hf/edit",
                textKey: "links.engineeringGraphics",
              },
              {
                href: "https://docs.google.com/document/d/13QCYZKY8QO83dddhBkMZMBw4e7Wn5xP9/edit",
                textKey: "links.itAndProgramming",
              },
              {
                href: "https://docs.google.com/document/d/1YdVDhlM5ZpPe008qFcPqNVhfduVsLK02/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "mobileDeveloper",
            titleKey: "docsprograms.mobileDeveloper",
            descriptionKey: "docsdescriptions.mobileDeveloper",
            links: [
              {
                href: "https://docs.google.com/document/d/1vUs97NLYFdvCg-_zO3yo0N0hkoOMnL8a/edit",
                textKey: "links.programmingTechnology",
              },
              {
                href: "https://docs.google.com/document/d/1Fp0bkYVc_-00i7G4QB-DZzM3TctQq83S/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1-FN-lmwmHdlcSTlKDEhAHlie88C7BKd3/edit",
                textKey: "links.itProjectManagement",
              },
              {
                href: "https://docs.google.com/document/d/1spO74Pg5mevwVDQiohwb4FFv1ANGfpPq/edit",
                textKey: "links.oop",
              },
              {
                href: "https://docs.google.com/document/d/1IdrmAQMZK3xxaK7jIffheY1TUHzxJmU6/edit",
                textKey: "links.programmingLibraries",
              },
              {
                href: "https://docs.google.com/document/d/1Tgz-MzKrhc8A8IUzRsnAls46iVP7v-KQ/edit",
                textKey: "links.algorithmsAndDataStructures",
              },
              {
                href: "https://docs.google.com/document/d/1G4R_rbLBwx_msfdzc6xb3CQWaEYENvUW/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "sewingDesign",
            titleKey: "docsprograms.sewingDesign",
            descriptionKey: "docsdescriptions.sewingDesign",
            links: [
              {
                href: "https://docs.google.com/document/d/120mkf7k8mMm488Bz7XZ7VM6_VpgA9xft/edit",
                textKey: "links.sewingDesignConstruction",
              },
              {
                href: "https://docs.google.com/document/d/1T8NHNMCQVWKxKGXkAB0fm0J6lGNMIQTe/edit",
                textKey: "links.sewingTechnology",
              },
              {
                href: "https://docs.google.com/document/d/1KekQ-VDI41XaA_XOY5mmUTt54B0mSAjR/edit",
                textKey: "links.specialDrawing",
              },
              {
                href: "https://docs.google.com/document/d/1gANM1trLd3y9b0fOYsAVSKaKkk45y_tp/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1oBcOezG6Dro3ddDx7mPv_BSfeTbAU143/edit",
                textKey: "links.sewingEquipment",
              },
              {
                href: "https://docs.google.com/document/d/14jSb77rwSMrf2L2P8fmbiDN0Op9che6h/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "informationSecurity",
            titleKey: "docsprograms.informationSecurity",
            descriptionKey: "docsdescriptions.informationSecurity",
            links: [
              {
                href: "https://docs.google.com/document/d/1elaqLmD2cMLCpk-Apj7mo0lwP1J1k4VS/edit",
                textKey: "links.technicalMeans",
              },
              {
                href: "https://docs.google.com/document/d/11FUNSowcVU033PGrPQKOGLMIdhuqqZJ9/edit",
                textKey: "links.softwareProtection",
              },
              {
                href: "https://docs.google.com/document/d/1q8KtPGu1V819CEya-FqKHUoHiuKwtWwM/edit",
                textKey: "links.operatingSystems",
              },
              {
                href: "https://docs.google.com/document/d/1KlYU8nYigrVZCD1a2Nzkr5WDZBYIDGl-/edit",
                textKey: "links.informationSecurityBasics",
              },
              {
                href: "https://docs.google.com/document/d/1-Df2lOwgXUNrNndmYULy14QEOgbBkhEh/edit",
                textKey: "links.informatics",
              },
              {
                href: "https://docs.google.com/document/d/1Yo1hzW4JwXKDV2uMDOwwnNNY_GFSMHdw/edit",
                textKey: "links.databases",
              },
              {
                href: "https://docs.google.com/document/d/1yKtgM5sEqiCjU1cE7PnVUT0n8pSCMKsd/edit",
                textKey: "links.algorithmBasics",
              },
            ],
          },
          {
            id: "miningMechanic",
            titleKey: "docsprograms.miningMechanic",
            descriptionKey: "docsdescriptions.miningMechanic",
            links: [
              {
                href: "https://docs.google.com/document/d/1bXMqI3uiXnvLEKpP1pR8c2d_G0FCNfhJ/edit",
                textKey: "links.digitalLiteracy",
              },
              {
                href: "https://docs.google.com/document/d/1meFSRAPxgaNoTAia-33EEO0tRomjfjXz/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1wFtVQmmt0hM_1J2jL1RFDu0jCRGPqH9K/edit",
                textKey: "links.electricalMaterialsBasics",
              },
              {
                href: "https://docs.google.com/document/d/1ku728GxOwJXoGIlqS6SJC1K3jNh5n-hv/edit",
                textKey: "links.technicalDrawing",
              },
              {
                href: "https://docs.google.com/document/d/1wvt01tEUimImY3XucTINAGmmFi1jxrTA/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
          {
            id: "carRepairMechanic",
            titleKey: "docsprograms.carRepairMechanic",
            descriptionKey: "docsdescriptions.carRepairMechanic",
            links: [
              {
                href: "https://docs.google.com/document/d/1xN0-s9uSQI04w57zdXQX5HxBHFbGeR_n/edit",
                textKey: "links.industrialTraining",
              },
              {
                href: "https://docs.google.com/document/d/1GduXbthlLB6pQeRx67RTvApx0A5Ov5xZ/edit",
                textKey: "links.electricalMaterialsBasics",
              },
              {
                href: "https://docs.google.com/document/d/1RXSgOojwGuDpfTL_M-AV6zDJHuXffbEB/edit",
                textKey: "links.carRepairSystem",
              },
              {
                href: "https://docs.google.com/document/d/1-UWmVwKNmYjzFnL3ElDzkR-vUWPRDic2/edit",
                textKey: "links.electricalBasics",
              },
              {
                href: "https://docs.google.com/document/d/1zsoWv084TVPAOxW3YPvg_yWB_JtCx0XV/edit",
                textKey: "links.technicalDrawing",
              },
              {
                href: "https://docs.google.com/document/d/1IDZP1K0naz9MP_uM-OOpg8FgqgG5vMyV/edit",
                textKey: "links.carMaintenanceRepair",
              },
              {
                href: "https://docs.google.com/document/d/1EUgotFCMJ69kI5paOpFXW9yoQeh4C8Qz/edit",
                textKey: "links.carRepairTechnology",
              },
              {
                href: "https://docs.google.com/document/d/1yzZzL-P6HbXJgE2ES-XKYXUobhlNENjt/edit",
                textKey: "links.carElectricalSystems",
              },
              {
                href: "https://docs.google.com/document/d/1vaI5bC7zs9hjAjVI-wbYJisxV5Phr_jO/edit",
                textKey: "links.carDevices",
              },
              {
                href: "https://docs.google.com/document/d/1uZVEjk_1SjzThdIC-I3kxyIhh3iBu6iK/edit",
                textKey: "links.vocationalEducation",
              },
            ],
          },
        ];
  });
  const [editingSection, setEditingSection] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections));
  }, [sections]);

  const handleToggle = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const handleEdit = (section) => {
    setEditingSection({ ...section, newLinks: section.links });
  };

  const handleSaveEdit = () => {
    setSections(
      sections.map((s) =>
        s.id === editingSection.id
          ? {
              ...s,
              titleKey: editingSection.titleKey,
              descriptionKey: editingSection.descriptionKey,
              links: editingSection.newLinks,
            }
          : s
      )
    );
    setEditingSection(null);
  };

  const handleAddSection = () => {
    const newId = `section-${Date.now()}`;
    setSections([
      ...sections,
      {
        id: newId,
        titleKey: `docsprograms.${newId}`,
        descriptionKey: `docsdescriptions.${newId}`,
        links: [],
      },
    ]);
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setOpenSection(newId);
    }, 100);
  };

  const handleDeleteSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
    if (openSection === id) setOpenSection(null);
    if (editingSection?.id === id) setEditingSection(null);
  };

  const handleAddLink = () => {
    setEditingSection({
      ...editingSection,
      newLinks: [...editingSection.newLinks, { href: "", textKey: "" }],
    });
  };

  const handleUpdateLink = (index, field, value) => {
    const updatedLinks = editingSection.newLinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setEditingSection({ ...editingSection, newLinks: updatedLinks });
  };

  const handleDeleteLink = (index) => {
    setEditingSection({
      ...editingSection,
      newLinks: editingSection.newLinks.filter((_, i) => i !== index),
    });
  };

  const handleSaveToLDocs = (section) => {
    const filePath =
      "c:\\Users\\donif\\Desktop\\PLIT\\src\\pages\\HeaderPages\\LDocs.jsx";

    // Чтение текущего содержимого файла
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Ошибка чтения файла:", err);
        return;
      }

      // Добавление новой секции в файл
      const updatedContent = `
      ${data.trim()},
      {
        id: "${section.id}",
        titleKey: "${section.titleKey}",
        descriptionKey: "${section.descriptionKey}",
        links: ${JSON.stringify(section.links, null, 2)}
      }
    `;

      fs.writeFile(filePath, updatedContent, (writeErr) => {
        if (writeErr) {
          console.error("Ошибка записи файла:", writeErr);
          return;
        }
        alert("Секция успешно сохранена в LDocs.jsx");
      });
    });
  };
  return (
    <div className="w-full px-4 pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="mx-auto w-full max-w-lg h-auto divide-y divide-gray-300 rounded-xl bg-white shadow-lg">
        <button
          onClick={handleAddSection}
          className="m-4 px-4 py-2 bg-bordo text-white rounded-lg shadow-md hover:bg-red-800 transition"
        >
          Добавить новую секцию
        </button>
        {sections.map((section) => (
          <Disclosure key={section.id}>
            {({ open }) => (
              <div className="p-6">
                <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                  <Disclosure.Button
                    onClick={() => handleToggle(section.id)}
                    className="group flex w-full items-center justify-between"
                  >
                    <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                      {t(section.titleKey)}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openSection === section.id ? -180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="h-8 w-8 text-gray-500 group-hover:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </Disclosure.Button>
                  <div className="flex gap-2 ml-auto">
                    <button
                      onClick={() => handleEdit(section)}
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Изменить
                    </button>
                    <button
                      onClick={() => handleDeleteSection(section.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Удалить
                    </button>
                    <button
                      onClick={() => handleSaveToLDocs(section)}
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Сохранить
                    </button>
                  </div>
                </div>
                {openSection === section.id && (
                  <Disclosure.Panel static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <p className="text-xl font-bold text-bordo text-center mb-4">
                        {t(section.descriptionKey)}
                      </p>
                      <div className="flex flex-col gap-2">
                        {section.links.map(({ href, textKey }) => (
                          <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-bordo rounded-lg shadow-md transition"
                          >
                            {t(textKey)}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </Disclosure.Panel>
                )}
              </div>
            )}
          </Disclosure>
        ))}
        <div ref={bottomRef}></div>
      </div>
      {editingSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Изменить секцию</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Ключ Заголовка
              </label>
              <input
                type="text"
                value={editingSection.titleKey}
                onChange={(e) =>
                  setEditingSection({
                    ...editingSection,
                    titleKey: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Описание Ключа
              </label>
              <input
                type="text"
                value={editingSection.descriptionKey}
                onChange={(e) =>
                  setEditingSection({
                    ...editingSection,
                    descriptionKey: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Ссылки</h3>
              {editingSection.newLinks.map((link, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Link URL"
                    value={link.href}
                    onChange={(e) =>
                      handleUpdateLink(index, "href", e.target.value)
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Link Text Key"
                    value={link.textKey}
                    onChange={(e) =>
                      handleUpdateLink(index, "textKey", e.target.value)
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleDeleteLink(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Удалить
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddLink}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Добавить Ссылку
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingSection(null)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Отмена
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocsAdmin;
