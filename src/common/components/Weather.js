import { useSelector } from 'react-redux'
import { getWeatherData } from '../../app/selector'
import { Widget } from './Widget'

export const Weather = () => {
  const weather = useSelector(getWeatherData).weather[0]

  return <Widget title="Weather" data={weather} />
}
