import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import Iimg  from "../../../assets/img/Information.jpg";
import Iimg2 from "../../../assets/img/Information2.jpg";

const Information = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={Iimg} image1={Iimg2}
      name={t("Information.name")}
      tagline="Защищаем данные в эпоху, когда каждый байт на счету"
      title={t("Information.title")}   text={t("Information.text")}
      master={t("Information.master")}
      lvl1={t("Information.1lvl")}    lvl2={t("Information.2lvl")}  lvl3={t("Information.3lvl")}
      salary={t("Information.salary")}
      junior={t("Information.junior")} middle={t("Information.middle")} senior={t("Information.senior")}
    />
  );
};
export default Information;
