import React, { useEffect, useState } from "react";

const Personajes = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/character`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setInfo(data.results);
        console.log(data, "data");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {info.map((item) => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden mt-3 ml-20 shadow-lg gap-2">
          <img
            className="w-full"
            src={item.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="text-gray-700 text-base">
              Fecha de creacion: {item.created}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.gender}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.status}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.species}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personajes;
