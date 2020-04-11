import React from "react"
import { theme } from "../constants/getTheme"
import Header from "../components/Header"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { graphql } from "gatsby"
import BlogFeed from "../components/BlogFeed"

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.dark,
    minHeight: '100%'
  }
}))

export default ({ data }) => {
  return(<ThemeProvider theme={theme}>
    <BlogContent data={data} />
  </ThemeProvider>)
}

const BlogContent = ({ data }) => {
  const classes = useStyles()

  return (<div className={classes.wrapper}>
    <Header />
    <BlogFeed posts={data.allMarkdownRemark.edges}/>
  </div>)
}


export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            date
            tags
            description
          }
        }
      }
    }
  }
`