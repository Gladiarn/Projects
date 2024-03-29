import "./Card.css";
import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const Card = ({ data }) => {
  return (
    <div className="Cards">
      {data.map((feedback) => (
        <div className={`Card-Container ${feedback.Class}`} key={feedback.id}>
          <div className="Card-Top">
              <img src={feedback.Picture} alt="" className="Card-Image" />
              <div className="Name-Email">
                <p className="Card-Name">{feedback.Name}</p>
                <i>{feedback.Email}</i>
              </div>
            
          </div>
          <div className="Card-Bottom">
          <FaQuoteLeft className="quotes"/>
            <p className="Card-Message">{feedback.Message}</p>
            <FaQuoteRight className="quote-right quotes" />


      <div className="rating-container">
          <IoStar className="star"/>
          <IoStar className="star"/>
          <IoStar className="star"/>
          <IoStar className="star"/>
          <IoStar className="star"/>
        </div>

          </div>

        
          
          
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object
};

export default Card;
