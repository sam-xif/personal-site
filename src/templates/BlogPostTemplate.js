import React from "react"
import { graphql } from 'gatsby'
import { theme } from "../constants/getTheme"
import Header from "../components/Header"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles(theme => ({
  contentRoot: {
    height: '100%',
    backgroundColor: theme.palette.primary.dark, // TODO: Change this depending on props
    color: theme.palette.primary.contrastText
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  postRoot: {
    marginTop: theme.spacing(2)
  },
  body: {
    fontSize: '115%'
  }
}))

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <ThemeProvider theme={theme}>
      <BlogPostContent frontmatter={frontmatter} html={html} />
    </ThemeProvider>
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
    <>
      <Header />
      <div className={classes.contentRoot}>
        <Grid container className={classes.container}>
          <Grid item xs={10} md={6} className={classes.postRoot}>
            <Fade in={true} timeout={fadeIn}>
              <Typography variant={'h4'} color={'secondary'}>{frontmatter.title}</Typography>
            </Fade>
            {/*<Fade in={true} timeout={2 * fadeIn}>*/}
              <Divider />
              <div
                className={classes.body}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            {/*</Fade>*/}
          </Grid>
        </Grid>
            {/*<h2>{frontmatter.date}</h2>*/}
      </div>
    </>
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
      }
    }  
  }
`