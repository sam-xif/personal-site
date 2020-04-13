import React from "react"
import { theme } from "../constants/getTheme"
import WrapWithAppBar from "../components/WrapWithAppBar"
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
    <WrapWithAppBar>
      <BlogFeed posts={data.allMarkdownRemark.edges}/>
    </WrapWithAppBar>
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