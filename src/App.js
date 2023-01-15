import React from 'react';
import {
  BrowserRouter as Router ,
  Routes, //replaces "Switch" used till v5
  Route,
  ReactDOM,
  useNavigate
} from "react-router-dom";

import HomePage from '../src/HomePage';
import Team from '../src/Team';
import HowItWorks from '../src/HowItWorks';
import TakeOurQuiz from '../src/TakeOurQuiz';
import QuizPrompt from '../src/QuizPrompt';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="" element={<HomePage />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/HowItWorks" element={<HowItWorks/>} />
            <Route path="/TakeOurQuiz" element={<TakeOurQuiz />} />
            <Route path="/QuizPrompt" element={<QuizPrompt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
