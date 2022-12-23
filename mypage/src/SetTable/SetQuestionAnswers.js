import './setTable.css'
import {useRef} from 'react'
function SetQuestionAnswers({setSlides,slides,slideKey,answerKey,addSlide}){
    const copySlides=slides;

    const inputQuestion=useRef("");
    const inputAnswer=useRef("");


    function addQuestion(){
        copySlides.forEach(slide=>{
            if(slide.key===slideKey){
                slide.question=inputQuestion.current.value;
            }
        })

        return copySlides;    
    }

    function addAnswer(){
        copySlides.forEach(slide=>{
            if(slide.key===slideKey){
                slide.answers.forEach(answer=>{
                    if(answer.key===answerKey){
                        answer.content=inputAnswer.current.value;
                    }
                })
            }
        })
        return copySlides;
    }
    return <div className="setContainer">
        <input ref={inputQuestion} type="text" placeholder="qustion" onInput={()=>setSlides([...addQuestion()])}/>
        <input ref={inputAnswer} type="text" placeholder="answer" onInput={()=>setSlides([...addAnswer()])}/>
        <button onClick={addSlide}>add slide</button>
    </div>
}
export default SetQuestionAnswers;