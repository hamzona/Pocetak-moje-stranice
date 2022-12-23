import Slide from './Slides/Slide';
import { useState } from 'react';
import {v4 } from 'uuid'
import SetQuestionAnswers from './SetTable/SetQuestionAnswers'
import './app.css'
import { Link } from 'react-router-dom';
import {useDataSlides,useUpdateDataSlides} from './GlobalContext/DataSlides';




function App(){
  const slides=useDataSlides();
  const setSlides=useUpdateDataSlides();
  const [slideKey,setSlideKey]=useState("");
  const [answerKey,setAnswerKey]=useState("");


  function addSlide(){
    setSlides(prev=>[...prev,{
      key:v4(),
      question:"question",
      answers:[
        {key:v4(),correct:true,content:'answer 1'},
        {key:v4(),correct:true,content:'answer 2'},
        {key:v4(),correct:true,content:'answer 3'},
        {key:v4(),correct:true,content:'answer 4'}
      ]
    }])
    }

  return<div className='container'>
    <SetQuestionAnswers addSlide={addSlide} answerKey={answerKey} setSlides={setSlides} slideKey={slideKey} setSlideKey={setSlideKey} slides={slides}/>
    <div>
         {slides.map((slide,i)=>{
           return <Slide slides={slides} answerKey={answerKey} setSlides={setSlides} slideKey={slideKey} setAnswerKey={setAnswerKey} setSlideKey={setSlideKey} slide={slide} number={i+1} key={slide.key}/>
         })}
    </div>
    <div className='start'>
      <Link to="/start">Start</Link>
    </div>
  </div>
}

export default App;
