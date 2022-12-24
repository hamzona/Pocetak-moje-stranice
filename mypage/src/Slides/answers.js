import './slide.css'
import { useEffect } from 'react';
function Answers({answerKey,answer,slides,setSlides,slideKey,setAnswerKey}){

    /*stil*/
    const TrueFalseSyle={
        backgroundColor:answer.correct?'green':'red'
    }
    

    let copySlides=slides;
    /*Funkcija koja mjenja tacnost odgovora u njegovu suprotnu vrijednost i vraca taj obj*/
    
    const copyAnswerKey=answerKey;
    function hendleAnswer(){
       //answerDiv.target.classList.add('selected');
       copySlides.forEach(slide=>{
        if(slide.key===slideKey){
            slide.answers.forEach(answer=>{
                if(answer.key===copyAnswerKey){
                    answer.correct=!answer.correct;
                }
            })
        }
    })
    setSlides([...copySlides]);
    }
    useEffect(()=>{
      hendleAnswer();
    },[answerKey])
  


    return <div onClick={()=>{
        /*mjenja se selektovani answer i na osnovu njega i setupa se slides u izmjenjeni obj*/
        setAnswerKey(answer.key);}} style={TrueFalseSyle} className="answer">
        {answer.content}
    </div>
}

export default Answers;