import { useEffect, useState } from 'react'
import Container from '../components/Container/Container'
import './App.css'
import axios from 'axios'

const ADVICE_URL = 'https://api.adviceslip.com/advice'

function App() {
  const [advice, setAdvice] = useState("")

  useEffect(() => {
    async function fetchApi(){
      const res = await axios.get(ADVICE_URL)
      setAdvice(res.data.slip)
    }
    fetchApi()
  }, [])

  return (
    <>
      <Container advice={advice}/>
    </>
  )
}

export default App
