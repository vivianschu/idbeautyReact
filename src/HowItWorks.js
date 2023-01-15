import './App.css';
import { useNavigate } from "react-router-dom";

import logo from './images/idbeauty.svg';
import header from './images/hiw-cohere.svg';
import examples from './images/hiw-examples.svg';
import input from './images/hiw-input.svg';
import output from './images/hiw-output.svg';
import eyeliner_one from './images/eyeliner_one.svg';
import eyeliner_two from './images/eyeliner_two.svg';
import eyeliner_three from './images/eyeliner_three.svg';
import mascara_one from './images/mascara_one.svg';
import mascara_two from './images/mascara_two.svg';
import mascara_three from './images/mascara_three.svg';

function HowItWorks() {
  const navigate = useNavigate();

  console.log(navigate)
    return (
    <div>
      <a onClick={()=> navigate("HomePage")}><img id="logo" src={require(logo)} alt="id beauty"/></a>

      <div id="navbar">
        <a onClick={()=> navigate("/")} id="navhome">Home</a>
        <a onClick={()=> navigate("/Team")} id="navourteam">Team</a>
        <a onClick={()=> navigate("/HowItWorks")} id="navhowitworks">How it works</a>
        <a onClick={()=> navigate("/TakeOurQuiz")} id="navquiz">Take our quiz</a>
      </div>

      <p id="hiw-header">Our platform uses the Co:here API large language model (LLM) to analyze and classify text relating to makeup styles.</p>
      <img id="hiw-cohere" src={require(header)} alt="co:here"/>
      <p id="hiw-desc">Using the style quiz and user text input, our platform provides suggestions on products and makeup styles that would best suit their desired look.</p>

      <img id="hiw-examples" src={require(examples)} alt="examples:here"/>
      <img id="hiw-input" src={require(input)} alt="input"/>
      <img id="hiw-output" src={require(output)} alt="output"/>


      <div id="hiw-eyeliner">
        <img id="eyeliner-one" src={require(eyeliner_one)} alt="eyeliner one suggestion" class="product-img"/>
        <img id="eyeliner-two" src={require(eyeliner_two)} alt="eyeliner two suggestion" class="product-img"/>
        <img id="eyeliner-three" src={require(eyeliner_three)} alt="eyeliner three suggestion" class="product-img"/>
      </div>

      <div id="hiw-mascara">
        <img id="mascara-one" src={require(mascara_one)} alt="mascara one suggestion" class="product-img"/>
        <img id="mascara-two" src={require(mascara_two)} alt="mascara two suggestion" class="product-img"/>
        <img id="mascara-three" src={require(mascara_three)} alt="mascara three suggestion" class="product-img"/>
      </div>
    </div>
    )
  }

export default HowItWorks;