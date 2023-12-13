import { useSelector } from 'react-redux'
import { getCloudsData } from '../../app/selector'
import { Widget } from './Widget'

export const Clouds = () => {
  const clouds = useSelector(getCloudsData).clouds

  return <Widget title="Clouds" data={clouds} />
}
