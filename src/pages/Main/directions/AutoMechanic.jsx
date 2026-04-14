import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import Cimg  from "../../../assets/img/CarMechanic.jpg";
import Cimg2 from "../../../assets/img/CarMechanic2.jpg";

const AutoMechanic = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={Cimg} image1={Cimg2}
      name={t("AutoMechanic.name")}
      tagline={t("AutoMechanic.tagline")}
      title={t("AutoMechanic.title")}   text={t("AutoMechanic.text")}
      master={t("AutoMechanic.master")}
      lvl1={t("AutoMechanic.1lvl")}    lvl2={t("AutoMechanic.2lvl")}  lvl3={t("AutoMechanic.3lvl")}
      salary={t("AutoMechanic.salary")}
      junior={t("AutoMechanic.junior")} middle={t("AutoMechanic.middle")} senior={t("AutoMechanic.senior")}
    />
  );
};
export default AutoMechanic;
