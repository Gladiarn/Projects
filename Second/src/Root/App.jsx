import Navbar from "../Nav/Navbar";
import Home from "../HomeTemplate/Home";
import Booking from "../Booking/Booking";
import About from "../About/About";
import Feedback from "../Feedback/Feedback";
import Contact from "../Contact/Contact";
import "./App.css";

import {useRef} from "react"

function App() {
  const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];
  console.log(`it is the year ${year} in the month of ${month} on the day of ${day}`);
  
  const HomeRef = useRef(null);
  const BookRef = useRef(null);
  const AboutRef = useRef(null);
  const FeedbackRef = useRef(null);
  const ContactRef = useRef(null);


  return (
    <div id="App-Container">

      <div>
        <Navbar HomeRef={HomeRef} BookRef={BookRef} AboutRef={AboutRef} FeedbackRef={FeedbackRef} ContactRef={ContactRef} />
      </div>

      <div ref={HomeRef}>
        <Home />
      </div>

      <div ref={BookRef}>
        <Booking />
      </div>

      <div ref={AboutRef}>
        <About />
      </div>

      <div ref={FeedbackRef}>
        <Feedback />
      </div>

      <div ref={ContactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
