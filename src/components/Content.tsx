import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/store"
import { hotelsSelect } from "../helpers/selectors/hotelsSelector"
import {
  Button,
  Grid,
} from "@mui/material"
import { loadMoreHotels, setInitialHotels } from "../store/hotelSlice"
import { addFavorites } from "../store/favoritesSlice"
import { HotelCard } from "./HotelCard"
import { HotelType } from "../types/types"

interface ContentProps {
  setHotel: Dispatch<SetStateAction<HotelType>> | null
}

export const Content: FC<ContentProps> = ({setHotel}) => {
  const hotels = useAppSelector(hotelsSelect)
  const dispatch = useAppDispatch()

  const [isActive, setIsActive] = useState(false)
  
  const ref = useRef(false)
  useEffect(()=> {
    if (ref.current === false) {
      dispatch(setInitialHotels())
    }
    ref.current = true
  }, [ref, dispatch])

  const loadMoreHandle = () => {
    setIsActive(true)
    dispatch(loadMoreHotels()).then(()=>setIsActive(false))
  }


  const addToFavoriteHandle = (item: HotelType) => {
    dispatch(addFavorites(item))
  }

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {hotels.map((item: HotelType) => {
          
          
          return (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
                <HotelCard buttonText="Add to favorite" item={item} callback={addToFavoriteHandle} setHotel={setHotel}/>
            </Grid>
          )
        })}
      </Grid>
      <Button
        disabled={isActive}
        variant="outlined"
        fullWidth
        sx={{
          margin: '1rem 0',
          height: '10rem'
        }}
        onClick={loadMoreHandle}
      >Load more</Button>
    </>
  )
}
