/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"
import { HotelType } from "../types/types"
import {
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material"

interface HotelAboutPageProps {
  hotel: HotelType | null
}

export const HotelAboutPage: React.FC<HotelAboutPageProps> = ({ hotel }) => {
  return (
    <>
      <Paper>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="h2" component={"div"}>
              {hotel?.name}
            </Typography>
            <img
              src={hotel?.propertyImage ? hotel?.propertyImage.image.url : ""}
            />
          </Grid>
          <Grid item xs={5}>
          <Typography variant="h6" component={"div"}>
              Neighborhood: {hotel?.neighborhood.name}
            </Typography>
          <Typography variant="h6" color="text.secondary">
            Price: {hotel?.price.lead.formatted +
              " " +
              hotel?.price.priceMessages[0].value}
          </Typography>
          </Grid>
        </Grid>

        <ImageList>
          <ImageListItem></ImageListItem>
        </ImageList>
      </Paper>
    </>
  )
}
