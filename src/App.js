import { useState } from "react"

export default function App() {
  return (
    <div className="container">
      <Count />
    </div>
  )
}

// function Steps() {
//   const [steps, setSteps] = useState(0)

//   return (
//     <div className="steps">
//       <button onClick={() => setSteps((s) => s - 5)}>-</button>
//       <div>Step: {steps}</div>
//       <button onClick={() => setSteps((s) => s + 5)}>+</button>
//     </div>
//   )
// }

function Count() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const data = new Date()
  data.setDate(data.getDate() + count)
  return (
    <>
      <div className="contador">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <div>Step:{step} </div>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="contador">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <div>Count:{count} </div>
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
    </>
  )
}
