import { TextField } from '@mui/material'
import { searchHotels } from '../store/hotelSlice'
import { useAppDispatch } from '../store/store'
import { useDebounce } from '../hooks/useDebounce'

export const Search = () => {
  const dispatch = useAppDispatch()
  
  const typeHandle = () => {
    dispatch(searchHotels())
  }
  const throttledSearch = useDebounce(typeHandle, 2000)
  return (
    <>
    <TextField
          id="standard-basic"
          label="Отель"
          variant="standard"
          fullWidth
          onChange={throttledSearch}
          sx={{
            mb: 2
          }}
        />
    </>
  )
}
