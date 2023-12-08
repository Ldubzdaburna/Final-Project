import React, {useContext, useState} from 'react';
import { QuizContext } from '../Helpers/Context';
import "../App.css";
function MainMenu() {
    const {gameState,setGameState} = useContext(QuizContext);
    const [val,setVal] = useState("John Doe");
    const storeName = () =>{
      alert("Hello "+ val)
    };
    const change = event =>{
        setVal(event.target.value)
    }
  return (
    <div>
    <div className ="Menu">
      <h1>Welcome to Quiz Central</h1>
    <div>
        <form className='userName'>
          <label for="userName"> UserName: </label>
          <input type= "text" onChange={change} value={val}></input><br></br>
          <button onClick={storeName}>Store Name</button>
        </form>
      </div><br></br>
        <button onClick={()=> {setGameState("quiz")}}>Start Quiz</button>
    </div>
    </div>
  )
}

export default MainMenu