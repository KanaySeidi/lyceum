import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import img  from "../../../assets/img/back.jpg";
import img2 from "../../../assets/img/backend.jpg";

const Backend = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={img} image1={img2}
      name={t("backend.name")}
      tagline={t("backend.tagline")}
      title={t("backend.title")}   text={t("backend.text")}
      master={t("backend.master")}
      lvl1={t("backend.1lvl")}    lvl2={t("backend.2lvl")}  lvl3={t("backend.3lvl")}
      salary={t("backend.salary")}
      junior={t("backend.junior")} middle={t("backend.middle")} senior={t("backend.senior")}
    />
  );
};
export default Backend;
