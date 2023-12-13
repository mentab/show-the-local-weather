import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getGeolocationThunk = () => async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error),
      )
    })

    const { latitude, longitude } = position.coords

    return { latitude, longitude }
  } catch (error) {
    throw error
  }
}

export const getDashboardThunk = createAsyncThunk(
  'cart/getWeatherDataThunk',
  async (_, thunkApi) => {
    try {
      const geolocation = await thunkApi.dispatch(getGeolocationThunk())
      const { latitude, longitude } = geolocation

      const response = await fetch(
        `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`,
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const jsonResponse = await response.json()

      if (jsonResponse.error) {
        throw jsonResponse.error
      }

      return jsonResponse
    } catch (error) {
      throw error
    }
  },
)

export const dashboardSlice = createSlice({
  name: 'weather',
  initialState: { loading: true },
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(getDashboardThunk.pending, (state) => {
        return { ...state, error: undefined, loading: true }
      })
      .addCase(getDashboardThunk.fulfilled, (state, { payload }) => {
        return { ...state, data: payload, error: undefined, loading: false }
      })
      .addCase(getDashboardThunk.rejected, (state, action) => {
        return { ...state, error: action.error, loading: false }
      })
  },
})
