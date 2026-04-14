import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import img  from "../../../assets/img/front.png";
import img2 from "../../../assets/img/front2.png";

const Frontend = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={img} image1={img2}
      name={t("front.name")}
      tagline={t("front.tagline")}
      title={t("front.title")}   text={t("front.text")}
      master={t("front.master")}
      lvl1={t("front.1lvl")}    lvl2={t("front.2lvl")}  lvl3={t("front.3lvl")}
      salary={t("front.salary")}
      junior={t("front.junior")} middle={t("front.middle")} senior={t("front.senior")}
    />
  );
};
export default Frontend;
