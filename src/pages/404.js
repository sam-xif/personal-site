import React from "react"
import Header from "../components/Header"
import { theme } from "../constants/getTheme"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100%',
    overflow: 'hidden'
  },
  contentWrap: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark
  },
  messagePaper: {
    backgroundColor: theme.palette.secondary.main,
  },
  message: {
    padding: theme.spacing(3),
    fontWeight: 'bold'
  }
}))

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <PageContent />
    </ThemeProvider>
  )
}

const PageContent = () => {
  const classes = useStyles()
  return (<div className={classes.wrapper}>
    <Header />
    <div className={classes.contentWrap}>
      <Fade in={true} timeout={1000}>
        <Paper className={classes.messagePaper}>
          <Typography variant={'h3'} color={'primary'} className={classes.message}>
            404 :(
          </Typography>
        </Paper>
      </Fade>
    </div>
  </div>)
}