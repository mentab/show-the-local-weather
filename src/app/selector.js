const getDashboard = (state) => state?.dashboard
const getData = (state) => getDashboard(state)?.data

export const getLoading = (state) => getDashboard(state)?.loading
export const getError = (state) => getDashboard(state)?.error

const extractFields = (state, fields) => {
  const data = getData(state) || {}
  return fields.reduce((result, field) => {
    result[field] = data[field]
    return result
  }, {})
}

export const getCoordData = (state) => extractFields(state, ['coord'])
export const getWeatherData = (state) => extractFields(state, ['weather'])
export const getMainData = (state) => extractFields(state, ['main'])
export const getWindData = (state) => extractFields(state, ['wind'])
export const getCloudsData = (state) => extractFields(state, ['clouds'])
export const getSysData = (state) => extractFields(state, ['sys'])

export const getSummaryData = (state) => {
  const data = getData(state)?.weather[0] || {}
  const { main, description, icon } = data
  const { temp } = getData(state)?.main || {}
  const { name } = getData(state) || {}

  return { main, description, icon, temp, name }
}

export const getMiscData = (state) =>
  extractFields(state, [
    'base',
    'visibility',
    'dt',
    'timezone',
    'id',
    'name',
    'cod',
  ])
