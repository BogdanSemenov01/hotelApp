import React, { Dispatch, SetStateAction } from 'react'
import { Content, Search } from '../components'
import { HotelType } from '../types/types'

interface MainPageProps {
  setHotel: Dispatch<SetStateAction<HotelType>> | any
}

export const MainPage: React.FC<MainPageProps> = ({setHotel}) => {
  return (
    <>
      <Search />
      <Content setHotel={setHotel}/>
    </>
  )
}
