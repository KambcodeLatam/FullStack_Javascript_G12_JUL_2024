import React, { useEffect, useState } from 'react'
import CharacterCard from '../characterCard/characterCard'
import './episodios.css'
import Search from '../search/search';

const Episodios = () => {

    const [search, setSearch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [dataInput, setDataInput] = useState('')

    console.log(dataInput,'data del input');
    

    useEffect( () => {
        const fetchCharacters = async (page) => {
          const url = `https://rickandmortyapi.com/api/episode/?page=${page}`;
          try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data,'data episodes');
                        
            setSearch(data.results);
            setTotalPages(data.info.pages);
            
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
    
        fetchCharacters(currentPage);
      },[currentPage]);

      const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const previousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const goToPage = (page) => {
        setCurrentPage(page);
      };
    
    
      const getPageButtons = () => {
        const buttons = [];
        let startPage = Math.max(currentPage - 2, 1);
        let endPage = Math.min(currentPage + 2, totalPages);
    
        if (endPage - startPage < 4) {
          if (startPage === 1) {
            endPage = Math.min(5, totalPages);
          } else {
            startPage = Math.max(totalPages - 4, 1);
          }
        }
    
        for (let i = startPage; i <= endPage; i++) {
          buttons.push(i);
        }
    
        return buttons;
    
      }
    
      const pageButtons = getPageButtons();

  return (
    <>
    <Search setDataInput={setDataInput}/>
     <div className="card m-10">
        {
            search.filter((item) => {
                return dataInput.toLowerCase() === '' 
                    ? item 
                    : item.name.toLowerCase().includes(dataInput)
            }).map((data) => {
                return <CharacterCard key={data.id} genre={data.episode} status={data.air_date} name={data.name}/>
                
            })
        }
    </div>
    <div className="pagination">
        <button className={`pagination-button ${currentPage === -1 ? 'disabled' : ''}`} onClick={previousPage} disabled={currentPage === 1}>
          Anterior
        </button>

        {pageButtons.map((index) => {
          return (
            <button 
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`} 
              onClick={() => goToPage(index + 1 )}
              key={index + 1}
            >
              {index + 1}
            </button>
          )
        })}
        
        <button className={`pagination-button-siguiente ${currentPage === 1 ? 'active' : ''}`} onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente 
        </button>
      </div>
    </>
   
  )
}

export default Episodios