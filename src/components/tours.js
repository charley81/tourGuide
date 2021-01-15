import React from 'react'
import Tour from './tour'

const Tours = ({ tours, id }) => {
  return (
    <section>
      {tours.map(tour => (
        <Tour key={id} tours={tours} {...tour} />
      ))}
    </section>
  )
}

export default Tours
