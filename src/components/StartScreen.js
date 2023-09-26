function StartScreen({numQuestion,dispatch}) {
    return (
        <div className="start">
            <h2>welcome to the React Quiz</h2>
            <h3>{numQuestion} questions to test your React Mastery</h3>
            <button className="btn btn-ui" onClick={()=>dispatch({type:'start'})}>let's start</button>
        </div>
    )
}

export default StartScreen
