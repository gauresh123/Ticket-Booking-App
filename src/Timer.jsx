import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[secs,setsecs]=useState(0);
    const[min,setmin]=useState(0);

    var timer;
    useEffect(()=>{
        timer = setTimeout(()=>{
            setsecs(secs+1);
            if(secs == 59){
                setmin(min+1);
                setsecs(0);
            }
        },1000)
        return ()=> clearTimeout(timer);
    })
  return (
    <div>
      <h1>Timer</h1>
      <h1>{min<10?"0"+min:min}:{secs<10?"0"+secs:secs}</h1>
    </div>
  )
}

export default Timer
