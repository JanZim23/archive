import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    ".content": {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: typography.rhythm(30),
      padding: `${typography.rhythm(1.5)} ${typography.rhythm(3 / 4)}`,
    },
    "a": {
      color: 'inherit'
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
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
