import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Tags from "./Tags"
import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Star } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
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
  paperDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

function BlogPostCard(props) {
  const { node, date } = props
  const classes = useStyles()

  return (
    <Card className={classes.postRoot}>
      <CardContent className={classes.postContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Star style={{color: "gold", display: 'inline'}}/>
            <Typography style={{display: 'inline'}} variant={'h5'} className={classes.text}>{node.frontmatter.title}</Typography>
          </div>
          <Typography className={classes.date}>{date.format('MMMM D, YYYY')}</Typography>
        </div>
        <Divider className={classes.paperDivider} />
        <Typography className={classes.text}><i>{node.frontmatter.description}</i></Typography>
        <Tags tags={node.frontmatter.tags} />
      </CardContent>
    </Card>)
}

export default BlogPostCard