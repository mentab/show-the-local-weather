import { useSelector } from 'react-redux'
import { getCoordData } from '../../app/selector'
import { Widget } from './Widget'

export const Coord = () => {
  const coord = useSelector(getCoordData).coord

  return <Widget title="Coord" data={coord} />
}
