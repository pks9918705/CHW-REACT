import  { useEffect, useState } from 'react'

 function useCounterHook(value) {
   
    const [count,setCount]=useState()

    useEffect(()=>{

        setCount(value)
        console.log("useEffect",count)

    },[])

 

    return {count,setCount,value}
}

export default useCounterHook