import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const DimensionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 1px #f0f0f0;
  margin-top: 10px;
  padding-top: 5px;
`

const Dimensions = () => {
  const { height, width } = useWindowDimensions()

  return (
    <DimensionsContainer>
      <Typography variant="caption">height: {height}</Typography>
      <Typography variant="caption">width: {width}</Typography>
    </DimensionsContainer>
  )
}

export default Dimensions
