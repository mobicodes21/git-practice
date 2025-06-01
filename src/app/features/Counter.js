import { decrement, fetchRandomNumber, increment, incrementBuAmount } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter(){
const count = useSelector((state)=>state.counter.value);
const status = useSelector((state)=>state.counter.status);
const dispatch = useDispatch();
    return(
<>
<h1>Count:{count}</h1>
<button onClick={()=>dispatch(increment())}>+1</button>
<button onClick={()=>dispatch(decrement())}>-1</button>
<button onClick={()=>dispatch(incrementBuAmount(5))}>+5</button>
<button onClick={()=>dispatch(fetchRandomNumber())}>{status === 'loading' ? 'Loading...' : 'Get Random Number +'}</button>
</>
    )
}

export default Counter;