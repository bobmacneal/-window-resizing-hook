import { Route, Switch } from 'react-router-dom'
import React, {
  useState,
} from 'react'
import { AppRoutes } from '../constants'
import Header from "./Header"
import Home from './Home'
import NavDrawer from "./NavDrawer"
import PropTypes from 'prop-types'
import { SidebarPixelWidth } from "../constants"
import styled from 'styled-components'
import Widgets from './Widgets'

const ContentContainer = styled.div`
  margin: 22px;
`
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.navDrawerOpen ? `${SidebarPixelWidth.OPEN-10}px` :`${SidebarPixelWidth.CLOSED-10}px`)};
  margin-top: -8px;
  transition: 0.3s margin;
`
const Layout = ({ history, location }) => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const handleChangeNavDrawer = value => {
    setNavDrawerOpen(value)
  }

  return (
    <>
      <NavDrawer
        history={history}
        onChange={handleChangeNavDrawer}
      />
      <LayoutContainer
        navDrawerOpen={navDrawerOpen}
      >
        <Header
          location={location}
        />
        <ContentContainer>
          <Switch>
            <Route
              component={Home}
              exact
              path={AppRoutes.Home.URL}
            />
            <Route
              component={Widgets}
              exact
              path={AppRoutes.Widgets.URL}
            />
          </Switch>
        </ContentContainer>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

export default Layout
