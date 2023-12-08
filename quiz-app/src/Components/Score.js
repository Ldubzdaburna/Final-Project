import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from "../Helpers/QuestionBank";
import "../App.css";
function Score() {
    const {score,setScore,setGameState } = useContext(QuizContext);
    const restartQuiz = () =>{
        setScore(0);
        setGameState("menu");
    }
    const avgScore = (score / Questions.length) * (100)
  return (
    <div className= "Score">
        <h1>Quiz Complete</h1>
        <h3 data-testid="avgScore">{avgScore}%</h3>
        <button onClick={restartQuiz} >Restart Quiz</button>
    </div>
  )
}

export default Score