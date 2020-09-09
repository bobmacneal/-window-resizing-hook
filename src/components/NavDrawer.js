import {
  AppRoutes,
  SidebarPixelWidth,
} from '../constants'
import {
  DoubleArrow,
  Home,
  Widgets,
} from '@material-ui/icons'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavToggle = styled(IconButton)`
  && {
    width: 50px;
    margin-left: 2px;
    transition-property: transform;
    transition-duration: 0.5s;

    &.collapsed {
      transform: rotate(180deg);
    }
  }
`
const NavToggleContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
`
const SDrawer = styled(Drawer)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;

  > div {
    position: static;
    background: #f2f2f2;
    border-right: solid 1px #e0e0e0;
  }
  width: ${props => (props.open ? `${SidebarPixelWidth.OPEN}px` : `${SidebarPixelWidth.CLOSED}px`)};
  transition: 0.3s width;
`
const SLink = styled(Link)`
  color: #000;
  text-decoration: none;
  white-space: nowrap;
`
const useStyles = makeStyles(() => ({
  tooltipText: {
    fontSize: 15,
  },
}))

export const NavDrawer = ({ history, onChange }) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigationMenu = [
    {
      name: AppRoutes.Home.TITLE,
      icon: <Home />,
      baseRouteName: AppRoutes.Home.URL,
    },
    {
      name: AppRoutes.Widgets.TITLE,
      icon: <Widgets />,
      baseRouteName: AppRoutes.Widgets.URL,
    },
  ]

  const generateSidebarMenuItems = list => (
    <List >
      {list.map(item => {
        return (
          <SLink
            to="#"
            key={item.name}
            onClick={() => handleChangeRoute(item.baseRouteName)}
          >
            <ListItem
              button
              selected={
                item.baseRouteName.includes(history.location.pathname)
              }
            >
              {drawerOpen ? (
                <>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.name}
                  />
                </>
              ) : (
                <Tooltip
                  arrow
                  classes={{
                    tooltip: classes.tooltipText,
                  }}
                  placement="right"
                  title={item.name}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </Tooltip>
              )}
            </ListItem>
          </SLink>
        )
      })}
    </List>
  )

  const handleChangeRoute = routeRequested => {
    history.push(routeRequested)
  }

  const handleClickSidebarToggle = () => {
    const status = !drawerOpen
    onChange(status)
    setDrawerOpen(status)
  }

  return (
    <>
      <SDrawer
        variant="permanent"
        open={drawerOpen}
      >
        <NavToggleContainer>
          <NavToggle
            onClick={() => handleClickSidebarToggle()}
            className={drawerOpen ? 'collapsed' : ''}
          >
            <DoubleArrow />
          </NavToggle>
        </NavToggleContainer>
        {generateSidebarMenuItems(navigationMenu)}
      </SDrawer>
    </>
  )
}

export default NavDrawer
