import React from 'react'

const Card = (props) => {
    const classes = `myclass ${props.className}`;
  return (
    <div>
        <div className="myclass my-3 ">
        {props.children}
        </div>
    </div>
  )
}

export default Card;