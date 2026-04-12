import tt from "../../assets/icon/tiktok-icon-2.svg";
import ig from "../../assets/icon/instagram-glyph.svg";
const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      <img
        src={tt}
        alt="tiktok"
        width={30}
        className="hover:scale-110 cursor-pointer "
      />
      <img
        src={ig}
        alt="tiktok"
        width={30}
        className="hover:scale-110 cursor-pointer"
      />
    </div>
  );
};

export default SocialMedia;
