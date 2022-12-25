import './presentSlide.css'
function CurrentAnswersData({answer,clicked,setClicked}){
    const TrueFalseSyle={
        backgroundColor:answer.correct?'green':'red'
    }
    function hendleAnswer(){
      setClicked(true);
        if(answer.correct){
            console.log('tacno')
        }else{
            console.log('netacno')
        }
    }
    return <div onClick={hendleAnswer} style={clicked?TrueFalseSyle:{}} className="pres-answer" >
        {answer.content}
    </div>
}

export default CurrentAnswersData;