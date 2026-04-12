// src/pages/news/News.async.jsx
import { lazy } from "react";

export const News = lazy(() =>
  import("./News.jsx").then((mod) => ({ default: mod.News }))
);
