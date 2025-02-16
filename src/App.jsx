import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Features/todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Hello Khaja,</h1>
    <div className=' bg-white'>

     <Todo/>
    </div>

    </>
  )
}

export default App
