// src/pages/news/NewsCards.async.jsx
import { lazy } from "react";

export const NewsCards = lazy(() =>
  import("./NewsCards.jsx").then((mod) => ({ default: mod.NewsCards }))
);
