import './setTable.css'
import {useEffect, useRef} from 'react';



/*Folder za izmjenu slideova */
function SetQuestionAnswers({setSlides,slides,setSlideKey,slideKey,answerKey,addSlide}){
    const copySlides=slides;

    const inputQuestion=useRef("");
    const inputAnswer=useRef("");
    /*resetovanja inputa question */
    useEffect(()=>{
        inputQuestion.current.value="";
    },[slideKey])
    /*resetovanje inputa answera */
    useEffect(()=>{
        inputAnswer.current.value="";
    },[answerKey])
    /*mjenjanje pitanja*/
    function addQuestion(){
        copySlides.forEach(slide=>{
            if(slide.key===slideKey){
                slide.question=inputQuestion.current.value;
            }
        })

        return copySlides;    
    }
    /*mjenjanje answera*/
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
    
    /*Brisanje slidova*/
    useEffect(()=>{
        setSlideKey(copySlides[copySlides.length-1].key);
    },[slides.length])

    function deleteSlide(){
        console.log(copySlides);
        if(copySlides[1]!==undefined){
            setSlides(copySlides.filter(slide=>{return slide.key!==slideKey?slide:''}));
        }
    }

    return <div className="setContainer">
        <input ref={inputQuestion} type="text" placeholder="qustion" onInput={()=>setSlides([...addQuestion()])}/>
        <input ref={inputAnswer} type="text" placeholder="answer" onInput={()=>setSlides([...addAnswer()])}/>
        <button onClick={addSlide}>add slide</button>
        <button onClick={deleteSlide}>Delete slide</button>
    </div>
}
export default SetQuestionAnswers;