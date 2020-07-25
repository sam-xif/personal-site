import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export const getTheme = () => {
  return createMuiTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(','),
      fontFamily2: [
        'Artifika',
        'serif'
      ].join(','),
    },
    spacing: 8,
    palette: {
      primary: {
        main: '#fff'
      },
      secondary: {
        main: '#12002e'
        //]'#ff5713'
        //'#3095ff'
        //'#ff6708'
        //'#00e3ff'
      }
    }
  })
}