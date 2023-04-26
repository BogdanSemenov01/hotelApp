import { Button, Card, CardActions , CardContent, CardMedia, Divider, Drawer, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { favoritesSelect } from '../helpers/selectors/favoritesSelector'
import { useAppDispatch, useAppSelector } from '../store/store'
import { removeFavorite } from '../store/favoritesSlice'
import { HotelCard } from './HotelCard'
import { HotelType } from '../types/types'

interface DrawerContentProps {
  isOpen: boolean
  closeDrawer: () => void
}

export const DrawerContent: React.FC<DrawerContentProps> = ({isOpen, closeDrawer}) => {
  const dispatch = useAppDispatch()

  const favorites = useAppSelector(favoritesSelect)

  const removeFromFavoritesHandle = (item: HotelType) => {
    dispatch(removeFavorite(item))
  }
  return (
    <>
      <Drawer 
      anchor={'right'}
      open={isOpen}
      onClose={closeDrawer}
      >
        <List sx={{ width: 345 }}>
        <ListItem>
        <Typography gutterBottom variant="h5" component="div">Избранные отели</Typography>
        </ListItem>
        <Divider />
        {favorites.map((item: HotelType) => (
          <ListItem key={item.id}>
            <HotelCard item={item} buttonText='Remove from favorite' callback={removeFromFavoritesHandle}/>
          </ListItem>
        ))}
      </List>
      </Drawer>
    </>
  )
}
