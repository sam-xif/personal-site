import Grid from "@material-ui/core/Grid"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  contentRoot: {
    padding: theme.spacing(2)
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.8,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid',
        borderColor: theme.palette.secondary.main
      },
    },
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.9,
    transition: theme.transitions.create('opacity', { duration: '0.5s' }),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Grid container style={{height: '100%'}}>
      <Grid item xs={6} style={{ height: '100%' }}>
        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <span className={classes.imageBackdrop}/>
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Blog
              <span className={classes.imageMarked}/>
            </Typography>
          </span>
        </ButtonBase>
      </Grid>
      <Grid item xs={6} style={{ height: '100%' }}>
        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {/*<span*/}
          {/*  className={classes.imageSrc}*/}
          {/*  style={{*/}
          {/*    backgroundImage: `url(${collegeProject})`,*/}
          {/*    zIndex: -1*/}
          {/*  }}*/}
          {/*/>*/}
          <span className={classes.imageBackdrop}/>
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
            Portfolio
            <span className={classes.imageMarked}/>
            </Typography>
          </span>
        </ButtonBase>
      </Grid>
    </Grid>)
}