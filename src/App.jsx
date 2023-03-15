import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home'
import Header from './Component/Header'
import './App.css'
import About from '../About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <About/>
    </>
  )
}

export default App
