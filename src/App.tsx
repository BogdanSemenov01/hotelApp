import { Container } from "@mui/material"
import "./App.css"
import { DrawerContent, Header } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { HotelAboutPage, MainPage } from "./pages"
import { HotelType } from "./types/types"

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [hotel, setHotel] = useState<HotelType | null>(null)

  return (
    <>
    <BrowserRouter>
      <Header openDrawer={()=>setOpenDrawer(true)}/>
      <Container 
        sx={{
          marginTop: 1,
        }}
        >
          <Routes>
            <Route path='/' element={<MainPage setHotel={setHotel} />}/>
            <Route path='/:id' element={<HotelAboutPage hotel={hotel} />}/>
          </Routes>
        <DrawerContent isOpen={openDrawer} closeDrawer={()=>setOpenDrawer(false)}/>          
      </Container>
        </BrowserRouter>
    </>
  )
}

export default App
