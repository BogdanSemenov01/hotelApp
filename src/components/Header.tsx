import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { Favorite } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { favoritesSelect } from "../helpers/selectors/favoritesSelector"
import Badge from "@mui/material/Badge"

interface HeaderProps {
  openDrawer: () => void
}

export const Header: React.FC<HeaderProps> = ({ openDrawer }) => {
  const favLen = useSelector(favoritesSelect).length
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hotels
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="favorite"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <Badge badgeContent={favLen} color='error'>
              <Favorite />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
