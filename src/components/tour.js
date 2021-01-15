import React from 'react'

const Tour = ({ name, info, image, price }) => {
  return (
    <article>
      <img src={image} alt="" />
      <div className="info">
        <h3>
          {name} <span>{price}</span>
        </h3>
        <p>{info}</p>
        <button>Not Interested</button>
      </div>
    </article>
  )
}

export default Tour
