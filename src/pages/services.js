import React, { useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { TimelineMax, TweenMax } from "gsap"

import { Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Depression from "../images/services/depression-therapy.jpg"
import LifeSkills from "../images/services/life-skills-training.jpg"
import Counselling from "../images/services/counselling.jpg"
import Rehabilitation from "../images/services/rehabilitation.jpg"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const services = [
  {
    title: "Counselling",
    image: Counselling,
  },
  {
    title: "Rehabilitation",
    image: Rehabilitation,
  },
  {
    title: "Depression Therapy",
    image: Depression,
  },
  {
    title: "Life Skills Training",
    image: LifeSkills,
  },
]

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiService {
        nodes {
          description
          name
          id
          slug
        }
      }
    }
  `)

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  return (
    <>
      <SEO title="Services" />
      <Typography
        variant="h1"
        color="secondary"
        className="t-grand home-title"
        align="center"
      >
        Services
      </Typography>
      <main className="row p-2">
        {data.allStrapiService.nodes.map(service => (
          <div className="col-md-6 col-lg-3">
            <AniLink
              to={`/services/${service.slug}`}
              paintDrip
              duration={1}
              hex="#240026"
            >
              <div
                className="blog-single-image service-card"
                style={{ backgroundImage: `url(${Depression})` }}
              >
                <div className="p-3 service-card-content">
                  <Typography color="" variant="h6" className="w-7">
                    {service.name}
                  </Typography>
                  <Typography color="" variant="body2" className="mt-1">
                    {truncateString(service.description, 50)}
                  </Typography>
                  <Typography
                    color="secondary"
                    variant="subtitle2"
                    className="w-7 mt-4"
                  >
                    More
                  </Typography>
                </div>
              </div>
            </AniLink>
          </div>
        ))}
      </main>
    </>
  )
}

export default Services
