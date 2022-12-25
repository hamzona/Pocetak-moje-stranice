import '../Slides/slide.css'
import CurrentAnswersData from './CurrentAnswersData.js'
import { useState } from 'react';

function CurrentSlide({currentSlideData,setI,i,setCurrentSlideData,slides}){
    /*pokazivanje odgovora*/
    const [clicked,setClicked]=useState(false);
    return <div className="table">
    <p className="number">{i+1}</p>
    <h2>{currentSlideData.question}</h2>

    <div className='answers'>
        {currentSlideData.answers.map(answer=>{
            return<CurrentAnswersData clicked={clicked} setClicked={setClicked} key={answer.key} answer={answer}/>
        })}
    </div> 
    <button onClick={()=>{
        setClicked(false)
        setI(prev=>{return ++prev})
        setCurrentSlideData(slides[i])}}>Next</button>
  </div>
}

export default CurrentSlide;