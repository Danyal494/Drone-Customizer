import { useState, useEffect } from 'react'
import './App.css'
import Experiance from './Components/Experiance'
import Loder from './Components/Loder'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loader after 1 minute (60000 ms)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)

    return () => clearTimeout(timer) // cleanup if component unmounts
  }, [])

  return (
    <>
      {loading ? <Loder /> : <Experiance />}
    </>
  )
}

export default App
