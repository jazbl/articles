import { useState } from 'react'
import './App.css'

function App(d) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>The winner is: { d.user }</h3>
    </>
  )
}

export default App
