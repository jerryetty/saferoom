import React, { useEffect, useState } from "react"
import { Typography, Button } from "@material-ui/core"
import Link from "gatsby-plugin-transition-link"
import AniLink  from 'gatsby-plugin-transition-link/AniLink'
import SEO from "../components/seo"
import Splash from "../components/splash"
import Girl from "../images/rose.png"
import { TimelineMax } from 'gsap'

const Home = () => {
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    const tl = new TimelineMax()
    tl.from(".splash", {
      "duration": .5,
      "opacity": 0,
      "ease": "power3.easeOut" 
    })
    tl.to(".splash", {
      "duration": 1,
      "opacity": 1,
      "ease": "power3.easeOut" 
    })
    tl.to(".splash", {
      "duration": 1,
      "opacity": 0,
      "display": "none",
      "ease": "power3.easeOut"
    })
    tl.from([".home-subtitle", ".home-title"], {
      "duration": .5,
      "opacity": 0,
      "y": -50,
      "ease": "power3.easeOut" 
    })
    // tl.from(".home-title", {
    //   "duration": .5,
    //   "opacity": 0,
    //   "y": 50,
    //   "ease": "power3.easeOut" 
    // })
    tl.from(".landing-image", {
      "duration": 1,
      "scale": 0,
      "ease": "power3.easeOut"
    })
    tl.from([".home-text", ".sr-button"], {
      "duration": .5,
      "opacity": 0,
      "y": 30,
      "ease": "power3.easeOut"
    })
    // tl.from(".sr-button", {
    //   "delay": 05,
    //   "duration": 1,
    //   "scale": 0,
    //   "ease": "power3.easeOut"
    // })
  }, [])

  const handleExitPage = () => {
    const tl = new TimelineMax()
    tl.to(".home-content", {
      duration: .5,
      opacity: 0,
      y: -50
    })
    tl.to(".landing-image", {
      duration: .5,
      x: "-50%",
      opacity: 0,
      ease: "power1.easeIn"
    })
  }

  return (
    <div>
      <SEO title="Saferoom - Let it out!" />

      <Splash />
      <div id="home-container">
        <div className="row home">
          {/* Small Devices */}
          <div className="col-md-12 d-block d-lg-none text-center mt-5">
            <Typography
              variant="h3"
              color="textPrimary"
              className="t-grand home-subtitle"
            >
              The Goal is
            </Typography>
            <Typography
              variant="h1"
              color="secondary"
              className="t-grand home-title"
            >
              Self Realization
            </Typography>
          </div>

          <div className="col-lg-5 landing-image-container">
            <img src={Girl} className="landing-image" alt="cover girl" />
          </div>
          <div className="col-lg-7 home-content">
            <Typography
              variant="h3"
              color="textPrimary"
              className="t-grand d-none d-lg-block home-subtitle"
            >
              The Goal is
            </Typography>
            <Typography
              variant="h1"
              color="secondary"
              className="t-grand d-none d-lg-block home-title"
            >
              Self Realization
            </Typography>
            <br />
            <hr />
            <Typography
              variant="body1"
              color="textPrimary"
              align="justify"
              className="home-text"
            >
              What is it that fuels you? For me, it’s SafeRoom And the desire
              for peace of mind. I love writing about my passions, what
              interests me, what interests others and sharing my thoughts with
              my readers.
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="textPrimary"
              align="justify"
              className="home-text"
            >
              Saferoom is truly my own little passion project, gaining more and
              more traction each day. I hope you enjoy browsing my site and all
              of the unique content I have to offer. Take a look around; perhaps
              you’ll discover what fuels you as well. Read on and enjoy it!
            </Typography>
            <br />
            <br />
            <div className="text-center text-lg-left">
              {/* <AniLink
                to="/services"
                exit={{ 
                  trigger: () => {handleExitPage()},
                  length: 1 
                }}
                entry={{
                  delay: 0.6,
                }}
              >
                <Button className="sr-button">Learn More</Button>
              </AniLink> */}
              <AniLink
                to="/blog"
                paintDrip
                duration={1}
                hex='#240026'
              >
                <Button className="sr-button">Explore</Button>
              </AniLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
