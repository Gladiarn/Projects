import "./Home.css";
import { AiFillBook } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

import{ easeInOut, easeOut, motion} from "framer-motion"

const Home = () => {

  const HomeVariants = {
    initial: {opacity: 0, x: "-10vw"},
    animate:{ opacity: 1, x: 0}

  }

  const ChildVariants = {
    initial: {opacity: 0, x: "-10vw"},
    animate: {opacity: 1, x: 0,
    transition: {delay: .2}}
  }




  return (
    <div className="home-Container">
      <img
        src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <motion.div className="home-greet"
      
      variants={HomeVariants}
      initial={"initial"}
      animate={"animate"}
      transition={{type: 'spring', duration: .5}}
      
      >
        <motion.h1 variants={ChildVariants}>Relax and Enjoy</motion.h1>
        <motion.p variants={ChildVariants} transition={{delay: .3}}>
          Book with us now and get as low as{" "}
          <motion.b variants={ChildVariants} style={{ color: "rgb(119, 180, 83)", marginLeft: "5px", marginRight: "5px" }}>
            10%{" "}
          </motion.b>
          Discount{" "}
        </motion.p>
        <motion.p variants={ChildVariants} style={{ fontSize: ".8rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sequi
          libero adipisci ut facere voluptates unde eos id, ullam atque!
          Obcaecati aspernatur repudiandae, porro labore tempore <br></br>accusantium
          laborum eveniet in!
        </motion.p>
        <div className="btns">
          <a className="home-btn more" href="#">
            Get to know us
            <FaArrowRight />
          </a>
          <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={{ type: 'spring',delay: 0, duration: .2, ease: easeInOut}} whileHover={{scale:1.1, transition:{duration: 0, ease: easeOut}}}className="home-btn book">
            Get Started
            <AiFillBook />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
