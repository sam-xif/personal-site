import React from "react"
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

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
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
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        <div className={classes.titleContainer}>
          <Fade in={true} timeout={800}>
            <Typography variant={'h3'} className={classes.title}>Blog</Typography>
          </Fade>
        </div>
        {posts.map(({ node }, idx) => {
          const date = moment(node.frontmatter.date)
          return (
            <Fade in={true} timeout={500 * (idx + 2)}>
              <ButtonBase className={classes.buttonRoot}>
                <Card className={classes.postRoot}>
                  <CardContent className={classes.postContent}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                      <Typography variant={'h5'} className={classes.text}>{node.frontmatter.title}</Typography>
                      <Typography className={classes.date}><i>{date.format('MMMM D, YYYY')}</i></Typography>
                    </div>
                    <Divider className={classes.paperDivider} />
                    <Typography className={classes.text}>{node.frontmatter.description}</Typography>
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