import { FaAlignJustify } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import {motion} from "framer-motion";
import {PropTypes} from 'prop-types';

const Navbar = ({HomeRef, BookRef, AboutRef, FeedbackRef, ContactRef}) => {


    function ScrollSmoothly(ref){


            const offset = ref.current.offsetTop;
            const elementHeight = ref.current.offsetHeight;
            const viewHeight = window.innerHeight;

            let Target;
            console.log(offset,elementHeight,viewHeight)

            if(ref === BookRef ||    ref === FeedbackRef){

                Target = offset - (viewHeight/2) + (elementHeight/2);

            }
            else{
                Target = offset;
            }
     
        window.scrollTo({
            top: Target,
            behavior: "smooth",
            

        })



    }

    const [toggled, setToggled] = useState(false);

    const ShowMenu = ()=>{
        setToggled(!toggled);
    }


    const NavVariants ={
        initial: {
            y: "-10vh",
            opacity: 0
        },

        animate: {
            y: 0,
            opacity: 1

        }
    }
    const ChildrenVariants ={

        initial: {
            y: "-10vh",
            opacity: 0
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: {delay: .2}
        }
    }

    

  return (
    <>
    <motion.div 
    variants={NavVariants}
    initial={"initial"}
    animate={"animate"}
    className="navbar-Container"
    >
        <p className="navbar-Logo"><FaHotel className="Logo-img"/><b>B</b>oo<b>K</b>ing</p>
            
            <FaAlignJustify size={30} className="navbar-Menu" onClick={()=>{ShowMenu()}}/>
        <motion.ul className="navbar-Links" variants={ChildrenVariants}>
            
            <li><a onClick={()=>{ScrollSmoothly(HomeRef)}}>Home</a></li>
            <hr />
            <li><a onClick={()=>{ScrollSmoothly(BookRef)}}>Book</a></li>
            <hr />
            <li><a onClick={()=>{ScrollSmoothly(AboutRef)}}>About</a></li>
            <hr />
            <li><a onClick={()=>{ScrollSmoothly(FeedbackRef)}}>Feedbacks</a></li>
            <hr />
            <li><a onClick={()=>{ScrollSmoothly(ContactRef)}}>Contact</a></li>
        </motion.ul>
        
        <button className="navbar-Btn Nav">
            Log-Out
            <FaAngleRight/>
        </button>
    </motion.div>
        <ul className="navbar-Sidebar" style={!toggled ? {display: "none"} : {display: "flex"}}>
            <RxCross1 size={30} className="navbar-Exit" style={!toggled ? {display: "none"} : {display: "flex"}} onClick={()=>{ShowMenu()}}/>
            <li><a onClick={()=>{ScrollSmoothly(HomeRef)}}>Home</a></li>
            <li><a onClick={()=>{ScrollSmoothly(BookRef)}}>Book</a></li>
            <li><a onClick={()=>{ScrollSmoothly(AboutRef)}}>About</a></li>
            <li><a onClick={()=>{ScrollSmoothly(FeedbackRef)}}>Feedbacks</a></li>
            <li><a onClick={()=>{ScrollSmoothly(ContactRef)}}>Contact</a></li>
            <li className="navbar-Btn sidebtn">
            Log-Out

            </li>
        </ul> 

        
    
    
    
    </>
  )
}

export default Navbar

Navbar.propTypes={
    HomeRef: PropTypes.shape(),
    BookRef: PropTypes.shape(),
    AboutRef: PropTypes.shape(),
    FeedbackRef: PropTypes.shape(),
    ContactRef: PropTypes.shape()

}
