import './App.css';
import spons from './images/spons.svg';
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
    return (
    <div>
      <img id="logo" src={require("./images/idbeauty.png")} alt="idbeauty"/>
      
      <div id="navbar">
        <a onClick={()=> navigate("/")} id="navhome">Home</a>
        <a onClick={()=> navigate("/Team")} id="navourteam">Team</a>
        <a onClick={()=> navigate("/HowItWorks")} id="navhowitworks">How it works</a>
        <a onClick={()=> navigate("/TakeOurQuiz")} id="navquiz">Take our quiz</a>
      </div>

      <p id="hook">Say goodbye to guesswork and hello to your personalized makeup bag.</p>
      <p id="homepara"> At <b><span style={{color:"#FFCF02"}} > id</span>beauty</b>, we provide the tools for makeup enthusiasts of all skill levels to discover new products that work for their unique beauty.</p>

      <img id="hook-img" src={require("./images/bonbon-line-hand-holds-the-mirror-the-brush-and-the-makeup-palette 1.png")} alt="makeup palette"/>

      <button id="getstartedbutton"><a href="/Quiz/Quiz">Get Started</a></button>
      <a id="learnmore" href="/HowItWorks">How it works</a>
          
      <p id = "desc-prompt">How [we] can help!</p>

      <p id = "desc-step1">1. Take any of our 3 quizzes to understand more about your eyes, lips, or face.</p>
      <p id = "desc-step2">2. Based on your answers, we can recommend styles that complement your unique beauty!</p>
      <p id = "desc-step3">3. Pick a style and we'll suggest a set of products to complete your makeup bag!</p>

      <img id="sponsor" src={spons} alt="A submission for SheHacks, January 2023."/>

    </div>
    )
  }

export default HomePage;