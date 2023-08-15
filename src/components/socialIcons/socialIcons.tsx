import { SocialIcon } from "react-social-icons";
import "./socialIcons.css";

function SocialIcons() {
  return (
    <div className="socialIconsBox">
      <SocialIcon className="socialIcon"
        url="https://open.spotify.com/artist/2tib6uzGOLCaPCDLW5Dzno?si=DPeVVSVJS-mk3K7Cx-lykA"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon className="socialIcon"
        url="https://www.youtube.com/@anotherworld8863/"
        bgColor="#eeeeee"
        fgColor="#F81112"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon className="socialIcon"
        url="https://www.instagram.com/another_world_music/"
        fgColor="#eeeeee"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon className="socialIcon"
        url="https://www.tiktok.com/@iamanotherworldmusic"
        fgColor="#eeeeee"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}

export default SocialIcons;
