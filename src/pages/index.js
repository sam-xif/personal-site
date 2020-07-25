import React from "react"
import WrapWithAppBar from "../components/WrapWithAppBar"
import { graphql } from 'gatsby'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
// import collegeProject from '../../static/img/college-project.png'
import { theme } from '../constants/getTheme'
import SleekMenu from "../components/SleekMenu"
import Layout from '../layouts'
import BlogFeed from "../components/BlogFeed"
import makeStyles from "@material-ui/core/styles/makeStyles"
import FeaturedFeed from "../components/FeaturedFeed"

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100%'
  }
}))

export default ({ data }) => {
  return(<BlogContent data={data} />)
}

const BlogContent = ({ data }) => {
  const classes = useStyles()

  return (<FeaturedFeed posts={data.allMarkdownRemark.edges}/>)
}

export const query = graphql`
  query {
    site { 
      siteMetadata {
        title
      }
    }
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
            featured
            live
          }
        }
      }
    }
  }
`