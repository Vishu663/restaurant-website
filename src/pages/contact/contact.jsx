import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="section-1">
          <h3>Make a Booking</h3>
          <p>Please leave your number we will call to make a reservation</p>
          <input type="name" placeholder="Enter your name" />
          <input type="number" placeholder="Enter your number" />
          <button type="submit">Submit</button>
        </div>
        <div className="section-2">
          <h3>Opening times</h3>
          <p>
            <span>Monday—Thursday: 08:00 — 22:00</span>
            <span>Friday—Saturday: 09:00 — 23:00 </span>
            <span>Sunday: 10:00 — 17:00</span>
          </p>
        </div>
        <div className="section-3">
          {" "}
          <h3>Contact Details</h3>
          <p>
            <span>123456789</span>
            <span>15 Florida Ave</span>
            <span>Palo-Alto, 1111 CA</span>
          </p>
        </div>
      </div>
    </>
  );
}
