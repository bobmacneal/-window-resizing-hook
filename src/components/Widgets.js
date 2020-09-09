import React from 'react'
import { AppRoutes } from "../constants"
import Dimensions from "./Dimensions"
import { Typography } from '@material-ui/core'

const Widgets = () => {
  return (
    <>
      <Typography variant="h6">{AppRoutes.Widgets.TITLE}</Typography>
      <Dimensions />
    </>
  )
}

export default Widgets
