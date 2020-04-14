import React from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  tag: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    display: 'inline'
  },
  tagsContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

export default ({ tags }) => {
  const classes = useStyles()

  if (!tags) {
    return null
  }

  return (
    <div className={classes.tagsContainer}>
      {tags.map(tag => (<Typography className={classes.tag}>{tag}</Typography>))}
    </div>
  )
}

