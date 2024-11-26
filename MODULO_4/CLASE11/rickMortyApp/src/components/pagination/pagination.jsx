import React, { useState } from 'react'

const Pagination = ({totalPages}) => {

    const [currentPage, setCurrentPage] = useState(1);

    

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
    <div>
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
    </div>
  )
}

export default Pagination