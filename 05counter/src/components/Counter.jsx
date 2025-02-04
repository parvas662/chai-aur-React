import { useState } from "react"; 

function Hello() {
    const [show,setShow] = useState(true);
    const [time,settimer] = useState(0);
    function timerFunction(){
        setTimeout(() => {
            /*  Here, count + 1 is calculated immediately based on the current count value.
                React updates the state with the new value,
                but it doesn't guarantee that the update will be based on the latest state if the state changes asynchronously.
            */
            settimer(time => time +1) // here we can see the difference between time+1 and time=> time +1 ,
            //  setCount(count => count + 1) (Function Update)
            //  This approach passes a function that receives the current state (count) and returns the new state.
            console.log(time)
        }, 2000)
    }
    return <> 
        <h1> hello, im a new Hello Component</h1>
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show ? <h1>Vishu</h1> : <h2>Parvas</h2>}
        </div>
        <button onClick={ timerFunction} > hello timer {time} </button>
 
    </>
}

export default Hello;