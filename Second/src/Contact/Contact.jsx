import { FaFacebookF } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (


      <footer className="footer">
        <div className="wrapper">
          <div className="footer-head">
            <h1>Book King</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident sed suscipit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Autem, laborum! Iusto deserunt ad
              labore repellat earum, molestiae magnam iste totam? Possimus ea
              aspernatur obcaecati excepturi qui neque at libero enim.
            </p>
          </div>

          <div className="footer-icons">
            <FaFacebookF className="icons" />
            <FaXTwitter className="icons" />
            <FaInstagram className="icons" />

            <BiLogoGmail className="icons" />
            <FaDiscord className="icons" />
          </div>

          
        </div>
        <div className="copyright">&copy; 2024 Book King. All rights reserved.</div>
      </footer>
  );
};

export default Contact;
