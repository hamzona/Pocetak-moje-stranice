
function CurrentAnswersData({answer,TrueFalseSyle,setTrueFalseSyle}){

   
    function hendleAnswer(){
        setTrueFalseSyle({ 
            backgroundColor:answer.correct?'green':'red'
        })
        if(answer.correct){
            console.log('tacno')
        }else{
            console.log('netacno')
        }
    }
    return <div onClick={hendleAnswer} style={TrueFalseSyle} className="answer" >
        {answer.content}
    </div>
}

export default CurrentAnswersData;