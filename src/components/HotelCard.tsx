import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from "react"
import { HotelType } from "../types/types"
import { Link } from "react-router-dom"

interface HotelCardProps {
  item: HotelType | null
  buttonText: string
  callback: (item: HotelType | any) => void | any
  setHotel?: Dispatch<SetStateAction<HotelType>> | null | any
}

export const HotelCard: React.FC<HotelCardProps> = ({
  item,
  buttonText,
  callback,
  setHotel,
}) => {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <Link
      to={item ? item.id : ""}
      style={{ textDecoration: "none" }}
      onClick={() => {
        if (setHotel) {
          setHotel(item)
        }
      }}
    >
      <Card sx={{ width: 345 }}>
        {item?.propertyImage ? (
          <CardMedia
            sx={{ height: 140 }}
            image={item?.propertyImage.image.url}
            title="green iguana"
          />
        ) : (
          ""
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.price.lead.formatted +
              " " +
              item?.price.priceMessages[0].value}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={(e: any) => {
              e.preventDefault()
              setIsAdded(true)
              callback(item)
            }}
            disabled={isAdded}
          >
            {isAdded ? "Added" : buttonText}
          </Button>
        </CardActions>
      </Card>
    </Link>
  )
}
