import "./Booking.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const Booking = () => {
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const Increment = (e) => {
    if (e.currentTarget.className == "addAdults") {
      setAdults((prev) => prev + 1);
    } else if (e.currentTarget.className == "addChildren") {
      setChildren((prev) => prev + 1);
    }
  };

  const Decrement = (e) => {
    if (e.currentTarget.className == "subtractAdults") {
      setAdults((prev) => prev - 1);
    } else if (e.currentTarget.className == "subtractChildren") {
      setChildren((prev) => prev - 1);
    }
  };



  //submit


  const SubmitForm = (e)=>{
      e.preventDefault();
      const Forms = [checkin, checkout, adults, children];
      console.log(Forms)
  }
  

  return (
    <div className="Booking-Container">
      <div className="Form-Container">
        <form
          action=""
          onSubmit={(e) => {
            SubmitForm(e)
          }}
          className="Form-Container-Form"
        >
          <div className="checkin-container">
            <p htmlFor="">Check-In</p>
            <input
              type="Date"
              onChange={(e) => {
                setCheckin(e.target.value);
              }}
              required
            />
          </div>

          <div className="checkout-container">
            <p htmlFor="">Check-Out</p>
            <input
              type="Date"
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
              required
            />
          </div>

          <div className="adults-container">
            <p>Adults</p>
            <div>
              <button
                onClick={(e) => {
                  Decrement(e);
                }}
                className="subtractAdults"
                disabled = {adults <= 0 ? true : false}
                type="button"
              >
                <FiMinus className="form-btn-logo" />
              </button>
              <label htmlFor="">{adults}</label>
              <button
                onClick={(e) => {
                  Increment(e);
                }}
                className="addAdults"
                disabled={adults >=10 ? true : false}
                type="button"
              >
                <FiPlus className="form-btn-logo" />
              </button>
            </div>
          </div>

          <div className="children-container">
            <p>Children</p>
            <div>
              <button
                onClick={(e) => {
                  Decrement(e);
                }}
                className="subtractChildren"
                disabled = {children <= 0 ? true : false}
                type="button"
              >
                <FiMinus className="form-btn-logo" />
              </button>
              <label htmlFor="">{children}</label>
              <button
                onClick={(e) => {
                  Increment(e);
                }}
                className="addChildren"
                disabled={children >=10 ? true : false}
                type="button"
              >
                <FiPlus className="form-btn-logo" />
              </button>
            </div>
          </div>
          <div className="btnholder">
          <button id="Search">
            Search
            <CiSearch className="search-icon" />
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
