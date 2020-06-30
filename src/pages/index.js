import React from "react"
import WrapWithAppBar from "../components/WrapWithAppBar"
import { graphql } from 'gatsby'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
// import collegeProject from '../../static/img/college-project.png'
import { theme } from '../constants/getTheme'
import SleekMenu from "../components/SleekMenu"
import Layout from '../layouts'

export default ({ data }) => {
  return (<SleekMenu />)
}

export const query = graphql`
  query {
    site { 
      siteMetadata {
        title
      }
    }
  }
`