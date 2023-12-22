import { useState } from "react"

export default function App() {
  return (
    <div className="container">
      <Count />
    </div>
  )
}

function Count() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  function handleReset() {
    setCount(0)
    setStep(1)
  }

  const data = new Date()
  data.setDate(data.getDate() + count)
  return (
    <>
      <div className="contador">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}
        <div>Step:{step} </div>
        {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      </div>
      <div className="contador">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <div>Count:{count} </div> */}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count >= 0
            ? `${count} day from today is `
            : `${count} days ago was `}
        </span>
        <span>{data.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div className="btn-reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  )
}
