import Grid from "@material-ui/core/Grid"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import arrowImg from '../../static/assets/arrowAnimLeft.svg'
import { navigate } from 'gatsby'
import Fade from "@material-ui/core/Fade"

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
        opacity: 0.9,
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
  arrow: {
    position: 'absolute',
    left: 50,
    right: 0,
    top: 0,
    bottom: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    zIndex: -2,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.dark,
    opacity: 1.0,
    transition: theme.transitions.create('opacity', { duration: '0.5s' }),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    bottom: 30
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
  const [fadingOut, setFadingOut] = useState(false)
  const navigateDelay = 800
  return (
    <>
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
            onClick={() => {
              setFadingOut(true)
              setTimeout(() => navigate('/blog'), navigateDelay)
            }}
          >
            <span className={classes.imageBackdrop}/>
            <Fade in={!fadingOut} timeout={800}>
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  BLOG
                  <span className={classes.imageMarked}/>
                </Typography>
              </span>
            </Fade>
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
            onClick={() => {
              setFadingOut(true)
              setTimeout(() => navigate('/portfolio'), navigateDelay)
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
            <Fade in={!fadingOut} timeout={1600}>
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  PORTFOLIO
                  <span className={classes.imageMarked}/>
                </Typography>
              </span>
            </Fade>
          </ButtonBase>
        </Grid>
      </Grid>
    </>)
}