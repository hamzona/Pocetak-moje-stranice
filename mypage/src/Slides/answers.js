import './slide.css'
function Answers({answerKey,answer,slides,setSlides,slideKey,setAnswerKey}){

    /*stil*/
    const TrueFalseSyle={
        backgroundColor:answer.correct?'green':'red'
    }
    

    return <div onClick={()=>{
        /*mjenja se selektovani answer i na osnovu njega i setupa se slides u izmjenjeni obj*/
        setAnswerKey(answer.key);}} style={TrueFalseSyle} className="answer">
        {answer.content}
    </div>
}

export default Answers;