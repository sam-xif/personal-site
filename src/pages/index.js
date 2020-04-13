import React from "react"
import WrapWithAppBar from "../components/WrapWithAppBar"
import { graphql } from 'gatsby'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
// import collegeProject from '../../static/img/college-project.png'
import { theme } from '../constants/getTheme'
import SleekMenu from "../components/SleekMenu"

export default ({ data }) => {

  return (
    <ThemeProvider theme={theme}>
      <div style={{height: '100%', overflow: 'hidden'}}>
        <WrapWithAppBar>
          <SleekMenu />
        </WrapWithAppBar>
      </div>
    </ThemeProvider>
  )
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