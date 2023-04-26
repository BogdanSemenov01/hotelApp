import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { HotelType } from '../types/types'

export interface IFavorites {
  favorites: Array<HotelType>
}

const initialState: IFavorites = {
  favorites: [
    
  ]
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state: RootState, action: PayloadAction<HotelType>) => {
      state.favorites.push(action.payload)
    },
    removeFavorite: (state: RootState, action: PayloadAction<HotelType>) => {
      const index = state.favorites.findIndex((item: HotelType) => item.id === action.payload.id)
      state.favorites.splice(index, 1)
    }
  },
  
})

export const { addFavorites, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer