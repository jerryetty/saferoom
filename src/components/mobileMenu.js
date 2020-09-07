import React from "react"
import "../styles/custom.css"
import { Typography } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MobileMenu = props => {
  return (
    <div className={`d-lg-none navigation ${props.active ? "active" : ""}`}>
      <div className="ham-btn" onClick={props.handleToggleActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="links">
        <div className="link">
          <AniLink
            to="/"
            paintDrip
            hex="240026"
            duration={1}
            className="mobile-menu-link"
            onClick={props.handleCloseMenu}
          >
            Home
          </AniLink>
        </div>
        <div className="link">
          <AniLink
            to="/blog"
            paintDrip
            hex="240026"
            duration={1}
            className="mobile-menu-link"
            onClick={props.handleCloseMenu}
          >
            Stories
          </AniLink>
          <AniLink
            to="/podcasts"
            paintDrip
            hex="240026"
            duration={1}
            className="mobile-menu-link"
            onClick={props.handleCloseMenu}
          >
            Podcasts
          </AniLink>
          <AniLink
            to="/shop"
            paintDrip
            hex="240026"
            duration={1}
            className="mobile-menu-link"
            onClick={props.handleCloseMenu}
          >
            Shop
          </AniLink>
          <div className="link">
            <AniLink
              to="/services"
              paintDrip
              hex="240026"
              duration={1}
              className="mobile-menu-link"
              onClick={props.handleCloseMenu}
            >
              Services
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
