import { Link } from "react-router-dom";
import { useDataSlides } from "../GlobalContext/DataSlides";
import CurrentSlide from "./CurrentSlide";
import { useState } from "react";
import './presentSlide.css'

function StartQuiz(){
    const [i,setI]=useState(0);
    const slides=useDataSlides();
    const [currentSlideData,setCurrentSlideData]=useState(slides[i]);
    if(currentSlideData!==undefined){
        return(<div className="quiz-run-cont">
            <Link className="link" to="/">Make quiz</Link>
            <CurrentSlide slides={slides} i={i} setI={setI} key={currentSlideData.key} setCurrentSlideData={setCurrentSlideData} currentSlideData={currentSlideData}/>
         </div>
         )
    }else{
        return<div>
            <h1>Finished game</h1>
            <button onClick={()=>{setI(0)
                setCurrentSlideData(slides[0])}}>Restart</button><br></br>
            <Link to="/">Make quiz</Link>
        </div>
    }
}

export default StartQuiz;