import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider, Button, IconButton } from "@material-ui/core"
import Logo from "../../images/assets/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import CSSPlugin from "gsap/CSSPlugin"

import "./layout.css"
import "normalize.css"
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons"
import MobileMenu from "../mobileMenu"

const font = "'Baloo 2', cursive"
const C = CSSPlugin

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1F2041",
    },
    secondary: {
      main: "#ec9f01",
    },
    text: {
      primary: "#d6abd6",
    },
  },
  typography: {
    fontFamily: font,
  },
  overrides: {
    MuiButton: {
      text: {
        fontFamily: font,
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiCard: {
      root: {
        fontFamily: font,
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiDialog: {
      root: {
        fontFamily: font,
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleCloseMenu = () => {
    setActive(false)
  }

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleToggleActive = () => {
    setActive(!active)
  }

  return (
    <div>
      {/* <Cursor /> */}
      <ThemeProvider theme={theme}>
        <div className="sr-bg container-fluid">
          <div className="sr-nav-bar row">
            <div className="col-lg-2 col-sm-4 col-6">
              <AniLink to="/">
                <img src={Logo} alt="logo" className="logo" />
              </AniLink>
            </div>
            <div className="col-lg-10 col-sm-8 col-6 text-right">
              <div className="navigation-bar d-none d-lg-block">
                <AniLink to="/blog" paintDrip duration={1} hex="#240026">
                  <Button className="sr-nav-link" size="large">
                    Stories
                  </Button>
                </AniLink>
                <AniLink to="/podcasts" paintDrip duration={1} hex="#240026">
                  <Button className="sr-nav-link" size="large">
                    Podcasts
                  </Button>
                </AniLink>
                <AniLink to="/shop" paintDrip duration={1} hex="#240026">
                  <Button className="sr-nav-link" size="large">
                    Shop
                  </Button>
                </AniLink>
                <AniLink to="services" paintDrip duration={1} hex="#240026">
                  <Button className="sr-nav-link" size="large">
                    Services
                  </Button>
                </AniLink>
              </div>
            </div>
          </div>
          <MobileMenu
            handleCloseMenu={handleCloseMenu}
            handleToggleActive={handleToggleActive}
            active={active}
          />
          {children}
        </div>
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
