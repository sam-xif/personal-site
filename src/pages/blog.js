import React from "react"
import { theme } from "../constants/getTheme"
import Header from "../components/Header"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100%',
    backgroundColor: theme.palette.primary.dark
  }
}))

export default () => {
  return(<ThemeProvider theme={theme}>
    <BlogContent />
  </ThemeProvider>)
}

const BlogContent = () => {
  const classes = useStyles()

  return (<div className={classes.wrapper}>
    <Header />
  </div>)
}