import React from 'react'

const Detail = (props) => {
    console.log(props,'props detail');
    
  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.gender}</h3>
    </div>
  )
}

export default Detail