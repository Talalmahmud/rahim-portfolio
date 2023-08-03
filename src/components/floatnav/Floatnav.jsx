import "./floatnav.css";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";

const Floatnav = () => {
  return (
    <div className="float__section">
      <div className="float__nav">
        <div className="float__nav__btn">
          <HashLink to="#home">
            <AiOutlineHome className="float__icon" />
          </HashLink>
        </div>

        <div className="float__nav__btn">
          <HashLink to="#about">
            <SiAboutdotme className="float__icon" />
          </HashLink>
        </div>

        <div className="float__nav__btn">
          <HashLink to="#skills">
            <GiSkills className="float__icon" />
          </HashLink>
        </div>

        <div className="float__nav__btn">
          <HashLink to="#services">
            <GrServices className="float__icon" />
          </HashLink>
        </div>

        <div className="float__nav__btn">
          <HashLink to="#portfolio">
            <AiOutlineAppstore className="float__icon" />
          </HashLink>
        </div>

        <div className="float__nav__btn">
          <HashLink to="#contact">
            <AiOutlineContacts className="float__icon" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Floatnav;
