import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ({rhythm}, options) => {
  console.log(options)
  options.headerFontFamily = ["Montserrat", "sans-serif"]
  options.bodyFontFamily = ["Open Sans", "sans-serif"]

  return {
    ".content": {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(30),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    },
    ".person": {
      borderRadius: '50%',
      display: 'block',
      margin: 'auto'
    },
    "a": {
      color: 'inherit'
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1": {
      fontSize: rhythm(2)
    },
    "h2": {
      fontSize: rhythm(1.5)
    },
    "p": {
      whiteSpace: 'pre-wrap'
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
