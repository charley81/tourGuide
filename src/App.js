import React, { useState, useEffect } from 'react'
import Loading from './components/loading'
import Tours from './components/tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

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

  if (!tours.length) {
    return (
      <div className="refresh">
        <h1>No tours left</h1>
        <button className="refresh-btn" onClick={() => fetchData()}>
          refresh
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">
          tour<span>Guide</span>{' '}
        </h1>
      </header>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App
