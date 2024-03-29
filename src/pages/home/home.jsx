import "./home.css";
import bg from "../../assets/bg.jpeg";
import { Link } from "react-scroll";
import { useState } from "react";
import Modal from "../../components/modal/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="home-container">
        <ul className="navbar">
          <li>
            <Link to="about" smooth={true} offset={0} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="reservations" smooth={true} offset={0} duration={500}>
              RESERVATIONS
            </Link>
          </li>
          <li>
            <Link to="menu" smooth={true} offset={0} duration={500}>
              MENU
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={0} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
        <img className="background" src={bg} alt="background-image" />
        <div className="home-content">Cafe Amor</div>
        <div className="book-table">
        {isModalOpen && <Modal onClose={closeModal} />}
          <button onClick={openModal}>Book a table</button>
        </div>
      </div>
    </>
  );
}
