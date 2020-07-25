import React, { Fragment } from "react"
import { getTheme } from '../constants/getTheme'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"
import { useQueryParam, BooleanParam } from "use-query-params"
import WrapWithAppBar from "../components/WrapWithAppBar"
import makeStyles from "@material-ui/core/styles/makeStyles"

export const DEFAULT_DARK_MODE_STATUS = true

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100%'
  }
}))

export default function Layout(props) {
  const [darkMode, _] = useQueryParam('dm', BooleanParam)
  const actualDarkMode = darkMode === undefined ? DEFAULT_DARK_MODE_STATUS : darkMode

  return (
    <Fragment>
      <ThemeProvider theme={getTheme({ darkMode: actualDarkMode })}>
        <LayoutInner {...props} />
      </ThemeProvider>
    </Fragment>
  )
}

const LayoutInner = ({ children }) => {
  const classes = useStyles()

  return (<>
      <CssBaseline />
      <div className={classes.wrapper}>
        <WrapWithAppBar>
          {children}
        </WrapWithAppBar>
      </div>
    </>
  )
}