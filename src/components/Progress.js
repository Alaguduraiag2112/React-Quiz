function Progress({index,numquestion,points,maxPoints,answer}) {
    return (
        <header className="progress">
            <progress max={numquestion} value={index + Number(answer!==null)}/>
            <p>Question <strong>{index+1}</strong>/{numquestion}</p>
            <p><strong>{points}</strong>/{maxPoints}</p>
        </header >
    )
}

export default Progress
