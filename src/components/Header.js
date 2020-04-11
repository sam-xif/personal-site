import React from "react"
import { AppBar } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    //   zIndex: 99,
  }, // a style rule
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  },
  toolbarButton: {
    marginRight: theme.spacing(2)
  },
  gridRoot: {
    flexGrow: 1,
  },
  toolbar: {
  }
}))

export default ({ children }) => {
  const classes = useStyles()
  return (
    <AppBar color={'primary'} position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" color={'secondary'} className={classes.title}>
          SGX
        </Typography>
        <Button color={'inherit'} className={classes.toolbarButton}>About Me</Button>
        <Button color={'inherit'} className={classes.toolbarButton}>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}