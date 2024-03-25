import "./home.css";
import bg from "../../assets/bg.jpeg";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <ul className="navbar">
          <li>ABOUT</li>
          <li>RESERVATIONS</li>
          <li>MENU</li>
          <li>CONTACT</li>
        </ul>
        <img className="background" src={bg} alt="background-image" />
        <div className="home-content">Cafe Amor</div>
        <div className="book-table"><button>Book a table</button></div>
      </div>
    </>
  );
}
