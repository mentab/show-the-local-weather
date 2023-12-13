import { useSelector } from 'react-redux'
import { getMainData } from '../../app/selector'
import { Widget } from './Widget'

export const Main = () => {
  const main = useSelector(getMainData).main

  return <Widget title="Main" data={main} />
}
