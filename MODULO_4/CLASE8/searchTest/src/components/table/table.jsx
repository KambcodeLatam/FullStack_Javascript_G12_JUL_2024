import React from 'react'
import { data } from "../../data"

const Table = ({buscar}) => {
  return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Primer Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellido
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Genero
              </th>
            </tr>
          </thead>
          <tbody>
            {data.filter((res) => {
                return buscar.toLowerCase() === ''
                ? res
                : res.first_name.toLowerCase().includes(buscar)
            }).map((item) => {
                return (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    
                    <td className="px-6 py-4">{item.first_name}</td>
                    <td className="px-6 py-4">{item.last_name}</td>
                    <td className="px-6 py-4">${item.email}</td>
                    <td className="px-6 py-4">
                    {item.gender}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table