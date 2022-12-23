import './slide.css'

function Answers({answerKey,answer,slides,setSlides,slideKey,setAnswerKey}){

    const copySlides=slides;
    const TrueFalseSyle={
        backgroundColor:answer.correct?'green':'red'
    }
    function hendleAnswer(){
       //answerDiv.target.classList.add('selected');
       copySlides.forEach(slide=>{
        if(slide.key===slideKey){
            slide.answers.forEach(answer=>{
                if(answer.key===answerKey){
                    answer.correct=!answer.correct;
                }
            })
        }
    })
    return copySlides;
    }
    return <div onClick={()=>{
        setSlides([...hendleAnswer()])
        setAnswerKey(answer.key);}} style={TrueFalseSyle} className="answer">
        {answer.content}
    </div>
}

export default Answers;