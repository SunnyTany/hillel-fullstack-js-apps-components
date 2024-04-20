import { useState, useEffect } from "react"
import style from './CountComponent.module.scss'

const CountComponent = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count did mount & update", count) 
    // didmount & didupdate 
    // [] - didmount 
    // [count] - didupdate 
    // return () => {} - willunmount
    return () => {
      console.log("will unmount")
    }
  }, [count])
  
    return (
      <div className={style.container}>
        <h1 className={style.title} >Count: {count}</h1>
        <button className={style.buttonInc} onClick={() => setCount(count + 1)}>Increment</button>
        <button className={style.buttonDec} onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    )
}

export default CountComponent