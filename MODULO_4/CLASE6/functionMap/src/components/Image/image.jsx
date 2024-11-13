import React from 'react'

const Image = (props) => {
  console.log(props,'props iamge');
  
  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  )
}

export default Image