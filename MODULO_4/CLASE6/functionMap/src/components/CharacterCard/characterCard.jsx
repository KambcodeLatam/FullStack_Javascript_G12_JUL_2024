import React from 'react'
import Image from '../Image/image'
import Detail from '../Detail/detail'

const CharacterCard = ({image, name, gender}) => {

  return (
    <div>
        <h2>Character Card</h2>
       <Image image={image}/>
       <Detail name={name} gender={gender}/>
    </div>
  )
}

export default CharacterCard