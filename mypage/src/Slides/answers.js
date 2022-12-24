import './slide.css'

function Answers({answerKey,answer,slides,setSlides,slideKey,setAnswerKey}){

    /*stil*/
    const TrueFalseSyle={
        backgroundColor:answer.correct?'green':'red'
    }

    let copySlides=slides;
    /*Funkcija koja mjenja tacnost odgovora u njegovu suprotnu vrijednost i vraca taj obj*/
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
        /*mjenja se selektovani answer i na osnovu njega i setupa se slides u izmjenjeni obj*/
        setSlides([...hendleAnswer()])
        setAnswerKey(answer.key);}} style={TrueFalseSyle} className="answer">
        {answer.content}
    </div>
}

export default Answers;