import React from "react"
import performers from "../../content/performers.yaml"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenContainer from "../components/fullscreen-container"

const PerformerPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Performers" />
      <div className={'content'}>
        <FullscreenContainer>
          <div>
            <h1>Performers</h1>
            <div style={{textAlign: 'center', paddingBottom: '50px'}}>
              {performers.map((performer, index) => (
                <div>
                  <a href={'#' + performer.name.replace(' ', '')}>{performer.name}</a>
                </div>
              ))}
            </div>
          </div>
        </FullscreenContainer>

        {performers.map((performer, index) => (
            <div key={index} id={performer.name.replace(' ', '')}>
              <img src={`/files/performers/${performer.image}`} className={'person'} alt={performer.name}/>
              <a href={performer.website}>
                <h2>{performer.name}</h2>
              </a>
              <p style={{whiteSpace: 'pre-wrap'}}>{performer.bio}</p>
              <hr />
            </div>
          )
        )}
      </div>
    </Layout>
  )
}

export default PerformerPage

