import { useSelector } from 'react-redux'
import { getSysData } from '../../app/selector'
import { Widget } from './Widget'

export const Sys = () => {
  const sys = useSelector(getSysData).sys

  return <Widget title="Sys" data={sys} />
}
