import React from 'react'
import Tour from './tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      {tours.map(tour => (
        <Tour key={tour.id} tours={tours} {...tour} removeTour={removeTour} />
      ))}
    </section>
  )
}

export default Tours
