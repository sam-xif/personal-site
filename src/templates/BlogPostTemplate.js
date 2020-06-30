import React from "react"
import { graphql } from 'gatsby'
import { theme } from "../constants/getTheme"
import WrapWithAppBar from "../components/WrapWithAppBar"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Fade from "@material-ui/core/Fade"
import Tags from "../components/Tags"

const useStyles = makeStyles(theme => ({
  contentRoot: {
    minHeight: '100%',
    backgroundColor: theme.palette.primary.dark, // TODO: Change this depending on props
    color: theme.palette.primary.contrastText
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
  },
  postRoot: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    minHeight: '100%',
  },
  body: {
    fontSize: '120%',
    fontFamily: theme.typography.fontFamily2
  },
  section: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <BlogPostContent frontmatter={frontmatter} html={html} />
  )

  /*
  <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
   */
}

const BlogPostContent = (props) => {
  const { frontmatter, html } = props
  const classes = useStyles()
  const fadeIn = 500
  return (
      <div className={classes.contentRoot}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={10} md={6} xl={5} className={classes.postRoot}>
            <Fade in={true} timeout={fadeIn}>
              <Typography variant={'h4'} color={'secondary'}>{frontmatter.title}</Typography>
            </Fade>
            <div className={classes.section}>
              <Typography className={classes.text}><i>{frontmatter.description}</i></Typography>
            </div>
            <div className={classes.section}>
              <Tags tags={frontmatter.tags} />
            </div>
            {/*<Fade in={true} timeout={2 * fadeIn}>*/}
            <div className={classes.section}>
              <div
                className={classes.body}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            {/*</Fade>*/}
          </Grid>
        </Grid>
            {/*<h2>{frontmatter.date}</h2>*/}
      </div>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        tags
        description
      }
    }  
  }
`