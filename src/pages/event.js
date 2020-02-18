import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventPage = ({ data, location }) => {
  // NOTE: I don't think we need to query this info from the markdown
  return (
    <Layout location={location}>
      <SEO title="Event" />
      <h1>Event Details</h1>
      <section>
        <h2>Symposium — 6pm on April 21</h2>
        <p>
          DeKnatel & Venugopal — “AEIOU’s of Vocal Masking”
          <br />
          Harrigan - “Aesthetics of Algorave”
          <br />
          McCrosson - “Synthetic Soundscape”
          <br />
          Newmann - “Interactive Real-Time Sound Improvisation”
          <br />
          Ritter - “Social Media and Real-Time Performance”
          <br />
          Sandmeyer - “Audio Considerations in Virtual Reality”
          <br />
          Schweitzer - “Dr. Ho TBD”
          <br />
          Zimmermann - “The Future of 3D Audio”
        </p>
        <h2>Concert - 8pm on April 21</h2>
        <p>
          DeKnatel — 20 minute “musical” — “Regina Kickflip” (radio musical)
          <br />
          Harrigan - trombone / [something new?] / Imminence / “January 12, 2012”
          <br />
          McCrosson - sound design (Invasion) / 1 or 2 Kale tracks / “Digital Forest” / “Deviation” for clarinet, cello, piano?
          <br />
          Newmann - “Warm Up” / Plunderpiece / * send to me
          <br />
          Ritter - audio file on social media data / 1 plunderphonics work / “Alice in Wonderland”
          <br />
          Sandmeyer - [something new?] / Plunderphonics XCX
          <br />
          Schweitzer - music vids “AQUATIC CONSPIRACY THEORIES” - 2 “Yellow Bird” - 2 short songs, live
          <br />
          Venugopal - “string quartet” / a cappella thing?
          <br />
          Zimmermann - “Content” / “Text to MIDI”
        </p>
      </section>
    </Layout>
  )
}

export default EventPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
