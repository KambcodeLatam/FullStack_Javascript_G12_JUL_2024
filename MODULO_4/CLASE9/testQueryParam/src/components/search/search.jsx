import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
      navigate(`/?character=${query}`)
    }else{
      navigate('/')
    }
  }


  useEffect(() => {

    const characterQuery = queryParams.get('character');

    const fetchCharacter = async (query) => {
      const url = characterQuery
      ? `https://rickandmortyapi.com/api/character/?name=${characterQuery}`
      : 'https://rickandmortyapi.com/api/character'
  
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data, " data <---");
        if(data?.results){
          setData(data.results)  
        }else{
          setData([]);  
        }
      } catch (error) {
        console.error('Error en el servicio', error);
      }
    };
    
    fetchCharacter();

  }, [location.search]);

  

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-full w-full object-cover"
                src={item.image}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.status}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay caracteres</p>
      )}
      
    </div>
  );
};

export default Search;
