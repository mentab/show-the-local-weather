import { useSelector } from 'react-redux'
import { getMiscData } from '../../app/selector'
import { Widget } from './Widget'

export const Misc = () => {
  const misc = useSelector(getMiscData)

  return <Widget title="Misc" data={misc} />
}
