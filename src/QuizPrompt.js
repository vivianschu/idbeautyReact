import './App.css';
import { useNavigate } from "react-router-dom";
import promptimg from './images/people-finder.svg';
// import script from '../src/Cohere'
import cohere from 'cohere-ai';

function QuizPrompt() {
    const navigate = useNavigate();

    function test2() { 

      let user_input;

      document.getElementById("submitbutton").onclick = function(){
        user_input = document.getElementById("beauty-prompt-textbox").value;
        console.log(user_input);
      }
    }

    
    return (
    <div>
      <a onClick={()=> navigate("../HomePage", { replace: true })}><img id="logo" src={require("./images/idbeauty.png")} alt="id beauty"/></a>
      
      <div id="navbar">
        <a onClick={()=> navigate("../HomePage", { replace: true })} id="navhome">Home</a>
        <a onClick={()=> navigate("../Team", { replace: true })} id="navourteam">Team</a>
        <a onClick={()=> navigate("../HowItWorks", { replace: true })} id="navhowitworks">How it works</a>
        <a onClick={()=> navigate("../TakeOurQuiz", { replace: true })} id="navquiz">Take our quiz</a>
      </div>

      <img id="prompt-img" src={promptimg} alt="prompt image"/>
      <p id="beauty-prompt">Tell us your beauty goals in 150 words.</p>
      <input id="beauty-prompt-textbox" type="textarea" placeholder="Example: 'I want to brighten my eyes.'"></input>
      <a href="/shehacks_project/quiz/quizeyeshape.html" id="backbutton">Back</a>
      
      <button id="submitbutton" type="button" onClick={test2} >Submit</button>

      {/* <script type="module" src="/Cohere.js"></script> */}

    </div>
    )
  }

export default QuizPrompt;