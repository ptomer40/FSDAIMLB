import React, { useEffect, useState } from 'react'

function UseEffectWorking() {
const[count,setCount]=useState(10);

function changes(){
    setCount(count+10);
}
useEffect(()=>{
    console.log("component render:"+count);
})

  return (
    <div>
    <div>UseEffectWorking</div>

    <button onClick={changes}>doChanges</button>
    </div>
  )
}

export default UseEffectWorking