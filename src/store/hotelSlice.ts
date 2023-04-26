import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HotelsApi } from "../api/HotelApi"
import { RootState } from "./store"
import { HotelType } from "../types/types"

export interface HotelState {
  hotels: Array<HotelType>
}

const initialState: HotelState = {
  hotels: [],
}

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setInitialHotels.fulfilled,
      (state: RootState, action: PayloadAction<Array<HotelType>>) => {
        state.hotels.push(...action.payload)
      }
    )
    builder.addCase(
      loadMoreHotels.fulfilled,
      (state: RootState, action: PayloadAction<Array<HotelType>>) => {
        state.hotels.push(...action.payload)
      }
    )
    builder.addCase(
      searchHotels.fulfilled,
      (state: RootState, action: PayloadAction<Array<HotelType>>) => {
        state.hotels = action.payload
      }
    )
  },
})

export const setInitialHotels = createAsyncThunk(
  "hotels/getHotels",
  async () => {
    const result = await HotelsApi.getHotels()
    return result
  }
)

export const searchHotels = createAsyncThunk(
  "hotels/searchHotels",
  async () => {
    const result = await HotelsApi.getHotels()
    return result
  }
)

export const loadMoreHotels = createAsyncThunk("hotels/loadMore", async () => {
  return HotelsApi.loadMoreHotels().then((response) => response)
})

// export const { } = counterSlice.actions

export default hotelsSlice.reducer
