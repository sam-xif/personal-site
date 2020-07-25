import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Fade from "@material-ui/core/Fade"
import moment from 'moment'
import { navigate } from "gatsby"
import BlogPostCard from "./BlogPostCard"
import ButtonBase from "@material-ui/core/ButtonBase"

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.main,
  },
  titleContainer: {
    marginTop: theme.spacing(2)
  },
  buttonRoot: {
    display: 'block',
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: 'left'
  },
  postRoot: {
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create(['background-color'], { duration: '0.5s' }),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  postContent: {
    //padding: theme.spacing(1)
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
  date: {
    color: theme.palette.primary.contrastText,
    fontSize: '110%'
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  paperDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

export default (props) => {
  const { posts } = props
  const [fadingOut, setFadingOut] = useState(false)
  const classes = useStyles()
  const navigateDelay = 800

  return (
    <Grid container className={classes.container}>
      <Grid item xs={10} md={6}>
        <div className={classes.titleContainer}>
          <Fade in={!fadingOut} timeout={500}>
            <Typography variant={'h3'} className={classes.title}>Featured Posts</Typography>
          </Fade>
        </div>
        {posts.map(({ node }, idx) => {
          if (!node.frontmatter.live || !node.frontmatter.featured) {
            return null
          }

          const date = moment(node.frontmatter.date)
          return (
            <Fade in={!fadingOut} timeout={500 * (idx + 2)}>
              <ButtonBase
                className={classes.buttonRoot}
                onClick={() => {
                  setFadingOut(true)
                  setTimeout(() => navigate(node.fields.path), navigateDelay)
                }}
              >
                <BlogPostCard
                  node={node}
                  date={date}
                />
              </ButtonBase>
            </Fade>)
        })}
      </Grid>
    </Grid>
  )
}