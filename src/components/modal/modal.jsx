import PropTypes from "prop-types"; // Import PropTypes
import "./modal.css"; // Import a separate CSS file for styling
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({
  onClose
}) => {
  const [inputValue, setInputValue] = useState("");
  const [DateValue, setDateValue] = useState("");
  const [TimeValue, setTimeValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChangeDate = (event) => {
    setDateValue(event.target.value);
  };

  const handleInputChangeTime = (event) => {
    setTimeValue(event.target.value);
  };

  function handleBooking(e) {
    e.preventDefault();
    console.log(
        "email: ", inputValue,
        "date: ", DateValue,
        "time: ", TimeValue,
    );
    alert("Table Booked")
    setInputValue("");
    setDateValue("");
    setTimeValue("");
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <MdOutlineCancel className="modal-cancel" onClick={onClose}/>
      <div className="create-post">
              <div className="post-heading">
                <FaUserCircle className="modal-user" />
                <input
                  onChange={handleInputChange}
                  value={inputValue}
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={handleInputChangeDate}
                  value={DateValue}
                  type="date"
                  placeholder="Date"
                />
                <input
                  onChange={handleInputChangeTime}
                  value={TimeValue}
                  type="time"
                  placeholder="Time"
                />
              </div>
              <div className="modal-post-button">
                <button disabled={inputValue.length === 0} onClick={handleBooking}>Book</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};
