import React from 'react'
import { Typography } from '@material-ui/core'
import { AppRoutes } from "../constants"

const Widgets = () => {
  return (
    <Typography variant="h6">{AppRoutes.Widgets.TITLE}</Typography>
  )
}

export default Widgets
