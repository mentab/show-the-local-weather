import { getDashboardThunk } from './dashboardSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Weather } from '../../common/components/Weather'
import { Coord } from '../../common/components/Coord'
import { Main } from '../../common/components/Main'
import { Wind } from '../../common/components/Wind'
import { Clouds } from '../../common/components/Clouds'
import { Sys } from '../../common/components/Sys'
import { Misc } from '../../common/components/Misc'
import { getLoading, getError } from '../../app/selector'
import { Loading } from '../../common/components/Loading'
import { Summary } from '../summary/Summary'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const loading = useSelector(getLoading)
  const error = useSelector(getError)

  useEffect(() => {
    dispatch(getDashboardThunk())
  }, [])

  return (
    <div className="bg-blue-100 min-h-screen p-5">
      <div className="container mx-auto">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-red-500">{error.message}</div>
        ) : (
          <div>
            <Summary />
            <div className="flex flex-wrap">
              <Weather />
              <Coord />
              <Main />
              <Wind />
              <Clouds />
              <Sys />
              <Misc />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
