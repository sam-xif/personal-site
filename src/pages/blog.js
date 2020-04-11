import React from "react"
import { theme } from "../constants/getTheme"
import Header from "../components/Header"
import ThemeProvider from "@material-ui/styles/ThemeProvider"

export default () => {
  return(<ThemeProvider theme={theme}>
    <div style={{height: '100%', overflow: 'hidden'}}>
      <Header />
    </div>
  </ThemeProvider>)
}