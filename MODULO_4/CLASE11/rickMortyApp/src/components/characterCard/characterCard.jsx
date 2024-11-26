import React from "react";
import Image from "../image/image";
import Title from "../title/title";
import Detail from "../detail/detail";
import './characterCard.css'

const CharacterCard = (props) => {
  return (
   
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="w-full">
            <Image img={props.img} />
          </div>
          <div className="circle">
            {props.status}
          </div>
          <div className="p-10 bg-green-500">
            <div className="font-bold text-xl text-center mb-2">
                <Title name={props.name} />
            </div>
            <div className="text-gray-700 text-base">
                <Detail genre={props.genre}  />
            </div>
          </div>
          
        </div>

  );
};

export default CharacterCard;
