import { useSelector } from 'react-redux'
import { getWindData } from '../../app/selector'
import { Widget } from './Widget'

export const Wind = () => {
  const wind = useSelector(getWindData).wind

  return <Widget title="Wind" data={wind} />
}
