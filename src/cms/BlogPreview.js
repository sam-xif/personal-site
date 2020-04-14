import React from "react"
import { theme } from '../constants/getTheme'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Header from "../components/WrapWithAppBar"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    zIndex: -2,
    backgroundColor: theme.palette.primary.dark
  }
}))

export default (props) => {
  const { entry } = props

  const title = entry.getIn(['data', 'title'])
  const content = props.widgetFor('body')

  return (
    <ThemeProvider theme={theme}>
      <BlogPreviewContent {...props} />
      {/*<BlogPostTemplate*/}
      {/*  title={title}*/}
      {/*/>*/}
    </ThemeProvider>
  )
}

const BlogPreviewContent = (props) => {
  const { entry } = props

  const classes = useStyles()

  const title = entry.getIn(['data', 'title'])
  const content = props.widgetFor('body')

  return (
    <>
      <Header />
      <div className={classes.content}>
        <h1>{title}</h1>
        <div>{props.widgetFor('body')}</div>
      </div>
    </>
  )
}