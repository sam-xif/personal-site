import React, { Fragment } from "react"
import { theme } from '../constants/getTheme'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"

export default ({ children }) => {
  return (<Fragment>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  </Fragment>)
}