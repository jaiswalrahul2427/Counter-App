// eslint-disable-next-line no-unused-vars
import {useState} from 'react'
// eslint-disable-next-line no-unused-vars
import Chai from "./chai"
//import Chai1 from "./chai1"
function App() {
  let [counter,setCounter] =useState(15)
const addValue=()=>{ 
  if(counter<20){
    setCounter(counter+1)
  }
  else{
    return 0;
  }
}
const removeValue=()=>{
  if(counter>0){
  setCounter(counter-1)
  }
  else{
    return 0;
  }
}
  return (
  <div style={{textAlign:'center'}}>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button onClick={addValue} >Add Value +1</button>
    <br />
    <button onClick={removeValue}>Remove Value -1</button>
  </div>
  )
}
export default App
