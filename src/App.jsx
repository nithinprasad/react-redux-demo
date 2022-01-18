import {useSelector,useDispatch} from 'react-redux'
import {decrement, increment} from './actions'
function App() {
    const dispatch=useDispatch();

  return <div className="App">
      <h1>Counter :{useSelector(state=> state.counter)}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
  </div>;
}

export default App;
