import './App.css';
import { useNavigate } from "react-router-dom";

import logo from './images/idbeauty.svg';
import czar from './images/czar.svg';
import kel from './images/kel.svg';
import bett from './images/bett.svg';
import vee from './images/vee.svg';

function Team() {

    const navigate = useNavigate();
    return (
    <div>
        <a onClick={()=> navigate("HomePage")}><img id="logo" src={require(logo)} alt="id beauty"/></a>
      
        <div id="navbar">
        <a onClick={()=> navigate("../", { replace: true })} id="navhome">Home</a>
        <a onClick={()=> navigate("../Team", { replace: true })} id="navourteam">Team</a>
        <a onClick={()=> navigate("../HowItWorks", { replace: true })} id="navhowitworks">How it works</a>
        <a onClick={()=> navigate("../TakeOurQuiz", { replace: true })} id="navquiz">Take our quiz</a>
        </div>

        <div id="team-members">
            <img id="czar" src={czar} alt="Czarina is our Lead Developer." class="teamimg"/>
            <img id="kel" src={kel} alt="Kelly is our Co-Developer." class="teamimg"/>
            <img id="bett" src={bett} alt="Betty is our Lead Designer." class="teamimg"/>
            <img id="vee" src={vee} alt="Vivian is our Data Scientist." class="teamimg"/>
        </div>
    </div>
    )
  }

  export default Team;