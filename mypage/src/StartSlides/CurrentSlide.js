import '../Slides/slide.css'
import CurrentAnswersData from './CurrentAnswersData.js'
import { useState } from 'react';

function CurrentSlide({currentSlideData,setI,i,setCurrentSlideData,slides}){
    const [TrueFalseSyle,setTrueFalseSyle]=useState({});
    return <div className="table">
    <p className="number">{i+1}</p>
    <h2>{currentSlideData.question}</h2>

    <div className='answers'>
        {currentSlideData.answers.map(answer=>{
            return<CurrentAnswersData key={answer.key} TrueFalseSyle={TrueFalseSyle} setTrueFalseSyle={setTrueFalseSyle} answer={answer}/>
        })}
    </div> 
    <button onClick={()=>{
        setI(prev=>{return ++prev})
        setCurrentSlideData(slides[i])}}>Next</button>
  </div>
}

export default CurrentSlide;