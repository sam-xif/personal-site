import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export const getTheme = ({ darkMode }) => {
  return createMuiTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(','),
      fontFamily2: [
        'Artifika',
        'serif'
      ].join(',')
    },
    spacing: 8,
    palette: {
      primary: {
        main: darkMode ? '#262626' : '#fff'
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
}