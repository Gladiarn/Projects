import "./Feedback.css"
import Card from "./Card/Card"
import { useEffect, useState } from "react"
import { IoIosSend } from "react-icons/io";
const Feedback = () => {
    

    const [data, setData] = useState([]);

    const [counter, setCounter] = useState(0);

    function CountHandler(e){
      let counts = e.target.value.length;
      setCounter(counts)
    }

    function SendFeedback(e){
      e.preventDefault()


    }



    const URL = "http://localhost:8000/Feedback";

    useEffect(()=>{
    
        async function FetchFeedbacks(){
            try{
            const res = await (await fetch(URL)).json()
            setData(res)

            }
            catch(error){
                console.log("Error Found: ", error)
            }
        }

        
        

        FetchFeedbacks()
        
    },[])
  
    

  return (
    <div className="Main-Container">
      <h1 style={{"color": "rgb(119, 180, 83)"}} className="why">Why travelers choose us?</h1>
      <div className="Feedback-Container">
        <div className="Feedbacks">
          
          <div className="card">
            {data.length > 0 && <Card data = {data}></Card>}
          </div>
            
        </div>
        <hr />
        <div className="Feedback-Form">

          <div className="Feedback-header">
                <p className="header-main" >Send us your feedbacks!</p>
                <p className="header-body">Are you dissatisfied with the service? Did you find some bugs? Tell us your suggestions so we can serve you better.</p>
          </div>

            <form action="" className="forms" onSubmit={(e)=>{SendFeedback(e)}}>

              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name"/>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email"/>
              </div>

              <div>
                <label htmlFor="feedback">Feedback</label>
                <textarea id="feedback" cols="30" rows="10" placeholder="Tell us something" maxLength={500} onChange={(e)=>{CountHandler(e)}}></textarea>
                <p className="counter">{counter}/500</p>
              </div>
                
                <button className="frm-btn">Submit Feedback<IoIosSend className="submit-icon"/></button>
            </form>

        </div>

      </div>
      
    </div>
  )
}

export default Feedback
