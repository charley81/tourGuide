import React, { useState, useEffect } from 'react'
import Loading from './components/loading'
import Tours from './components/tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">tourGuide</h1>
      </header>
    </div>
  )
}

export default App
