import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counters from './component/Counters.jsx'
import Footer from './component/Footer.jsx'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <Counters />
    <Footer />
    </>
  )
}

export default App
