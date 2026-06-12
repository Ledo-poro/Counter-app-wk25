import { useEffect, useRef, useState } from "react"
import "./App.css"
function App() {
  const [count, setCount] = useState(0)
  const fired = useRef(new Set());
  const [message , setMessage] = useState("")
  function Increment(){
    setCount(count + 1)
  }

  const canIncrement = count < 41
  const canDecrement = count > 0


  function Decrement(){
    setCount(count - 1)
  }

  function Reset(){
    window.location.reload()
  }


  function logic({ count }){

      useEffect(() => {
    if (count === 5 && !fired.current.has(5)) {
      setMessage(prev => [...prev, "The website is working 😁"]);
      fired.current.add(5);
    }

    if (count === 10 && !fired.current.has(10)) {
      setMessage(prev => [...prev, "Keep going 👊"]);
      fired.current.add(10);
    }
    if (count === 15 && !fired.current.has(15)) {
      setMessage(prev => [...prev, "I see you enjoy 😗"]);
      fired.current.add(15);
    }
    if (count === 20 && !fired.current.has(20)) {
      setMessage(prev => [...prev, "Is this app really that good? 😏"]);
      fired.current.add(20);
    }
    if (count === 25 && !fired.current.has(25)) {
      setMessage(prev => [...prev, "I advice you to stop ✋"]);
      fired.current.add(25);
    }
    if (count === 30 && !fired.current.has(30)) {
      setMessage(prev => [...prev, "Hey you Stop there 🚫"]);
      fired.current.add(30);
    }
    if (count === 40 && !fired.current.has(40)) {
      setMessage(prev => [...prev, "I died 💀"]);
      fired.current.add(40);
      
    }
  }, [count]);

  }

logic({ count })



  return (
      <main>
        <h2>Counter app</h2>
        <span>{count}</span>
        <div>
          <button onClick={Increment} className="Increment" disabled={!canIncrement}>+</button>

          <button onClick={Decrement} disabled={!canDecrement}>-</button>
          <button onClick={Reset}>Reset</button>
        </div>
{message && (
  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
    {message.map((msg, index) => (
      <span key={index} className="message">
        {msg}
      </span>
    ))}
  </div>
)}      </main>
  )
}

export default App;