import './slide.css'
import Answers from './answers';


function Slide({answerKey,slides,slide,setSlides,number,slideKey,setSlideKey,setAnswerKey}) {
    return <div className="table" onClick={()=>setSlideKey(slide.key)}>
    <p className="number">{number}</p>
    <h2>{slide.question}</h2>
    
    <div className='answers'>
        {slide.answers.map(answer=>{
            return<Answers answerKey={answerKey} slides={slides} setSlides={setSlides} slideKey={slideKey}  answer={answer} setAnswerKey={setAnswerKey} key={answer.key}/>
        })}
    </div> 
  </div>
}

export default Slide;
