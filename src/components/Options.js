function Options({question,dispatch,answer}) {
    const hasanswered=answer !== null

    return (
        <div className="options">
            {question.options.map((options,index)=>
            <button className={`btn btn-option ${index===answer ? "answer":""} ${hasanswered ? index===question.correctOption ?"correct":"wrong" : ""}`} 
            
            key={options} disabled={hasanswered} onClick={()=>dispatch({type:'newAnswer',payload:index})}>{options}
            </button>)}
        </div>
    )
}

export default Options
