import { RootState } from "../../store/store"

export const favoritesSelect = (state: RootState) => {
  return state.favorites.favorites
}