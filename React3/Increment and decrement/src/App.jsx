import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

 const add=()=>{
  if(count<15){
  setCount(  count+1);
  }
  else{
    return;
  }

  console.log(count)
 }
 const remove=()=>{
if(count>0){
setCount(count-1);
}
else
    return
console.log(count)
 }

  return (
    <>
    <h1>current value:{count}</h1>
    <button onClick={add}> increment value</button>
    <br/>
    <button onClick={remove}>Decrease value</button>
   <h1>Now Value:{count}</h1>
    </>
  )
}

export default App
