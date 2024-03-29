import "./menu.css";
import menubg from "../../assets/cafe-img2.jpeg";
import { Element } from "react-scroll";

export default function Menu() {
  return (
    <>
      <Element name="menu">
        <div className="menu-container">
          <img className="background" src={menubg} alt="background-image" />
          <div className="menu-section">HEllo</div>
        </div>
      </Element>
    </>
  );
}
