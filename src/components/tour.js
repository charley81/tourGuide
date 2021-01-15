import React, { useState } from 'react'

const Tour = ({ name, info, image, price, removeTour, id }) => {
  const [readMore, setReadMore] = useState('')

  return (
    <article>
      <img src={image} alt="" />
      <div className="info">
        <h3>
          {name} <span>${price}</span>
        </h3>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button
            className="link-button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  )
}

export default Tour
