import './App.css';
import React,{ useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import Score from './Components/Score';
import { QuizContext } from './Helpers/Context';
function App() {
  const[gameState, setGameState] = useState("menu");
  const[score,setScore]= useState(0)
  
  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <QuizContext.Provider value = {{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "score" && <Score />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
