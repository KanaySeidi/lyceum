import { useEffect } from "react";
import TagCloud from "TagCloud";

const WordSphere = () => {
  useEffect(() => {
    const container = ".tagcloud"; // Контейнер для сферы
    const texts = [
      "Бэкенд",
      "IT",
      "Фронтенд",
      "Мехатроника",
      "Робототехника",
      "Python",
      "Технология дизайна",
      "Мобильная разработка",
      "JavaScript",
      "Кибербезопасность",
      "Java",
      "Flutter",
    ];

    if (document.querySelector(container).childNodes.length === 0) {
      const options = {
        radius: 250,
        maxSpeed: "normal",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    }

    return () => {
      const tagcloudElement = document.querySelector(container);
      if (tagcloudElement) {
        tagcloudElement.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="tagcloud text-xl text-bordo cursor-default"></div>
    </div>
  );
};

export default WordSphere;
