import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
  spacing: 8,
  palette: {
    primary: {
      main: '#262626'
    },
    secondary: {
      main: '#ff5713'
      //]'#ff5713'
      //'#3095ff'
      //'#ff6708'
      //'#00e3ff'
    }
  }
})