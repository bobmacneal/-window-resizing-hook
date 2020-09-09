import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import {AppRoutes} from "../constants"
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = ({ location }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(undefined)

  useEffect(() => {
    switch(location.pathname) {
      case AppRoutes.Widgets.URL:
        setTitle(AppRoutes.Widgets.TITLE)
        break;
      default:
        setTitle(AppRoutes.Home.TITLE)
    }
  }, [location])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Header

