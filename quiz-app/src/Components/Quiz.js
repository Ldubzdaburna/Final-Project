import React,{ useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import{ Questions } from '../Helpers/QuestionBank';
import {App} from '../App';

function Quiz() {
    const { score,setScore,setGameState } = useContext(QuizContext)
    const[currQuestion, setCurrQuestion] = useState(0);
    const[optionChosen, setOptionChosen] = useState("");
    const nextQuestion = () =>{
        if (Questions[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    }
    const finishQuiz = () =>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setGameState("score");
    }
  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
            <button data-testid ="AnswerA" className='highlight' onClick={() => setOptionChosen("A")}>A: {Questions[currQuestion].optionA}</button>
            <button data-testid = "AnswerB" className='highlight' onClick={() => setOptionChosen("B")}>B: {Questions[currQuestion].optionB}</button>
            <button className='highlight' onClick={() => setOptionChosen("C")}>C: {Questions[currQuestion].optionC}</button>
            <button className='highlight' onClick={() =>  setOptionChosen("D")}>D: {Questions[currQuestion].optionD}</button>
        </div>
        {currQuestion == Questions.length -1 ? (<button data-testid="finishQuiz" onClick={finishQuiz}>Finish Quiz</button>):
        (
            <button data-testid = "nextQues" className="nextQuestion" onClick={nextQuestion}>Next Question</button>
        )} 
       
    </div>
  )
}

export default Quiz;