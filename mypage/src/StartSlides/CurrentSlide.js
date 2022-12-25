import CurrentAnswersData from './CurrentAnswersData.js'
import { useState } from 'react';
import './presentSlide.css'
function CurrentSlide({currentSlideData,setI,i,setCurrentSlideData,slides}){

    /*pokazivanje odgovora*/
    const [clicked,setClicked]=useState(false);

    return (
    <div className="pres-table">
        <div className='top-cont'>
        <p className="pres-number">{i+1}</p>
        <h2 className='pres-quesiton'>{currentSlideData.question}</h2>
        </div>

        <div className='pres-answers'>
            {currentSlideData.answers.map(answer=>{
                return<CurrentAnswersData clicked={clicked} setClicked={setClicked} key={answer.key} answer={answer}/>
            })}
        </div> 
        <button className='pres-next' onClick={()=>{
            setClicked(false)
            setI(prev=>{return ++prev})
            setCurrentSlideData(slides[i])}}
            >NEXT</button>
  </div>
  )
}

export default CurrentSlide;