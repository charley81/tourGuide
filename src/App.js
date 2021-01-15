import React, { useState, useEffect } from 'react'
import Loading from './components/loading'
import Tours from './components/tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
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
        <h1 className="title">
          tour<span>Guide</span>{' '}
        </h1>
      </header>
      <Tours tours={tours} />
    </div>
  )
}

export default App
