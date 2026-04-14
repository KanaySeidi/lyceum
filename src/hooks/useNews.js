import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

// TODO: когда будет бэкенд — раскомментируй и убери mock-данные ниже
// const API_URL = import.meta.env.VITE_API_URL;

const PINNED_KEY = "news_pinned_id";

const NEWS_IMAGES = {
  1: "/news/news1.jpg",
  2: "/news/news2.jpg",
  3: "/news/news3.jpg",
  4: "/news/news4.jpg",
  5: "/news/news5.jpg",
};

export const useNews = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pinnedId, setPinnedId] = useState(
    () => Number(localStorage.getItem(PINNED_KEY)) || null
  );

  useEffect(() => {
    const load = async () => {
      try {
        // TODO: заменить на реальный запрос:
        // const res = await fetch(`${API_URL}/api/news`);
        // if (!res.ok) throw new Error("Ошибка загрузки новостей");
        // const data = await res.json();
        // setNews(data);
        // setPinnedId(data.find(n => n.pinned)?.id ?? null);

        const localizedNews = t("mockNews", { returnObjects: true });
        setNews(
          Array.isArray(localizedNews)
            ? localizedNews.map((item) => ({ ...item, image: NEWS_IMAGES[item.id] }))
            : []
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [i18n.language, t]);

  // TODO: заменить тело на: await fetch(`${API_URL}/api/news/${id}/pin`, { method: "POST" })
  const togglePin = useCallback((id) => {
    const next = pinnedId === id ? null : id;
    setPinnedId(next);
    if (next) localStorage.setItem(PINNED_KEY, next);
    else localStorage.removeItem(PINNED_KEY);
  }, [pinnedId]);

  const getById = useCallback(
    (id) => news.find((n) => n.id === parseInt(id)),
    [news]
  );

  const sorted = [
    ...news.filter((n) => n.id === pinnedId),
    ...news.filter((n) => n.id !== pinnedId),
  ];

  return { news: sorted, rawNews: news, loading, error, pinnedId, togglePin, getById };
};
