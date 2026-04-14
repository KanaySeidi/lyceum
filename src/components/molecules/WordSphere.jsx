import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TagCloud from "TagCloud";

const WordSphere = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const container = ".tagcloud"; // Контейнер для сферы
    const texts = t("wordSphere.words", { returnObjects: true });

    if (document.querySelector(container).childNodes.length === 0) {
      const radius = Math.min(250, Math.max(120, window.innerWidth * 0.34));
      const options = {
        radius,
        maxSpeed: "normal",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, Array.isArray(texts) ? texts : [], options);
    }

    return () => {
      const tagcloudElement = document.querySelector(container);
      if (tagcloudElement) {
        tagcloudElement.innerHTML = "";
      }
    };
  }, [i18n.language, t]);

  return (
    <div className="hidden sm:flex items-center justify-center w-full min-h-[280px] sm:min-h-[340px] overflow-hidden">
      <div className="tagcloud text-sm sm:text-base md:text-xl text-[#1A3FA0] cursor-default"></div>
    </div>
  );
};

export default WordSphere;
