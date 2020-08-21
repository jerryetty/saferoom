import React, { useRef, useEffect } from "react"
import Tilt from "react-tilt"
import { TimelineLite, TweenLite } from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Typography, Button, Divider, IconButton } from "@material-ui/core"
import { ArrowUpwardOutlined } from "@material-ui/icons"

import HomeImage from "../images/rose.png"
import Logo from "../images/logo.svg"


const About = () => {
  const sec2 = useRef(null)

  useEffect(() => {
    const tl = new TimelineLite()
    tl.to("#section-2", {
      visibility: "visible",
      duration: 0.8,
    })
    tl.fromTo(
      ".home-image",
      {
        width: 0,
        ease: "linear.easeNone",
        duration: 0.7,
      },
      {
        width: "75%",
        ease: "linear.easeNone",
        duration: 0.7,
      }
    )

    tl.fromTo(
      ".logo",
      {
        opacity: "1",
        display: "block",
        ease: "linear.easeNone",
        duration: 0.4,
      },
      {
        opacity: "0",
        display: "none",
        ease: "linear.easeNone",
        duration: 0.4,
      }
    )

    tl.fromTo(
      "#welcome-message",
      {
        opacity: "0",
        display: "none",
        ease: "linear.easeNone",
        duration: 0.4,
      },
      {
        display: "block",
        opacity: "1",
        ease: "linear.easeNone",
        duration: 0.4,
      }
    )

    tl.to("#services-button", {})

  }, [])

  return (
    <div id="section-2" ref={sec2}>
      <div className="s2-item1">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="Tilt-inner">
            <img src={HomeImage} alt="rose" className="home-image" />
          </div>
        </Tilt>
      </div>

      <div className="s2-item2">
        <span className="up-button">
          <AniLink to="/" fade duration={2}>
            <IconButton color="primary">
              <ArrowUpwardOutlined />
            </IconButton>
          </AniLink>
        </span>
        <img src={Logo} alt="logo" id="logo" className="logo" />
        <div id="welcome-message">
          <Typography variant="h2" color="primary" className="font-grand-hotel">
            <strong>Welcome to SafeRoom</strong>
          </Typography>
          <br />
          <Typography variant="body1" className="text-white" align="justify">
            What is it that fuels you? For me, it’s SafeRoom And the desire for
            peace of mind. I love writing about my passions, what interests me,
            what interests others and sharing my thoughts with my readers.
            <br />
            <br />
            Saferoom is truly my own little passion project, gaining more and
            more traction each day. I hope you enjoy browsing my site and all of
            the unique content I have to offer. Take a look around; perhaps
            you’ll discover what fuels you as well. Read on and enjoy it!
          </Typography>
          <br />
          <Divider />
          <div className="button-container">
            <AniLink to="/services" cover duration={2} bg="#461149">
              <Button variant="outlined" color="secondary" id="services-button">
                Services
              </Button>
            </AniLink>
            <AniLink to="/blog" cover duration={2} bg="#461149">
              <Button
                variant="contained"
                color="secondary"
                href="#section-1"
                id="services-button"
              >
                Blog
              </Button>
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
