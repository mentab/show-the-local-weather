import React from 'react'

export const Widget = ({ title, data }) => {
  return (
    <div className="bg-white grow p-2 m-2 rounded-md shadow-md">
      <h2 className="text-sm font-extrabold text-blue-500 mb-3">{title}</h2>
      <ul className="list-none">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="text-xs mb-1">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </span>
              <span className="text-blue-500">{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
