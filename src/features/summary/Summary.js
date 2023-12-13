import { useSelector } from 'react-redux'
import { getSummaryData } from '../../app/selector'
import { useState } from 'react'

export const Summary = () => {
  const { main, description, icon, temp, name } = useSelector(getSummaryData)
  const [isCelsius, setIsCelcius] = useState(true)

  const toggleUnit = () => {
    setIsCelcius((prevCelsius) => !prevCelsius)
  }

  const convertTemperature = (temp) => {
    return isCelsius ? temp : (temp * 9) / 5 + 32
  }

  return (
    <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
      <div className="text-2xl font-bold">{name}</div>
      <div className="flex items-center">
        <img src={icon} alt={main} className="mr-2 w-10 h-10" />
        <div className="text-xl">
          {convertTemperature(temp).toFixed(1)} {isCelsius ? '°C' : '°F'}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg">{main}</p>
        <p className="text-sm">{description}</p>
      </div>
      <button
        className="mt-2 bg-gray-300 text-gray-700 p-2 rounded-md"
        onClick={toggleUnit}
      >
        {isCelsius ? 'Switch to Farenheit' : 'Switch to Celcius'}
      </button>
    </div>
  )
}
