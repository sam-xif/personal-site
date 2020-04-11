import React, { useState } from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Fade from "@material-ui/core/Fade"
import ButtonBase from "@material-ui/core/ButtonBase"
import moment from 'moment'
import { navigate } from "gatsby"

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
  tag: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    display: 'inline'
  },
  tagsContainer: {
    paddingTop: theme.spacing(2)
  },
  paperDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
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
            <Typography variant={'h3'} className={classes.title}>Blog</Typography>
          </Fade>
        </div>
        {posts.map(({ node }, idx) => {
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
                <Card className={classes.postRoot}>
                  <CardContent className={classes.postContent}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                      <Typography variant={'h5'} className={classes.text}>{node.frontmatter.title}</Typography>
                      <Typography className={classes.date}>{date.format('MMMM D, YYYY')}</Typography>
                    </div>
                    <Divider className={classes.paperDivider} />
                    <Typography className={classes.text}><i>{node.frontmatter.description}</i></Typography>
                    <div className={classes.tagsContainer}>
                      {node.frontmatter.tags.map(tag => {
                        return (
                          <Typography className={classes.tag}>{tag}</Typography>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Fade>)
        })}
      </Grid>
    </Grid>
  )
}