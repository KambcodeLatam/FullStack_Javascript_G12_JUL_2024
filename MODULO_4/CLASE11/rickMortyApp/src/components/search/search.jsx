import React from 'react'

const Search = ({setDataInput}) => {
  return (
    <div className="text-3xl mt-5 font-bold underline">
      <form className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            onChange={(e) => setDataInput(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
    </div>
  )
}

export default Search