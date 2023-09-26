export default function NextButton({dispatch,answer,index,numQuestion}) {
    if(answer===null) return null
     if(index<numQuestion-1) return (
        <div>
            <button className="btn btn-ui" onClick={()=>dispatch({type:'nextQuestion'})}>next</button>
        </div>
    )
    if(index === numQuestion-1) return(
        <div>
            <button className="btn btn-ui" onClick={()=>dispatch({type:'finish'})}>Finish</button>
        </div>
    )
}


