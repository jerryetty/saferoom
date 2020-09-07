import React from "react"
import Link from "gatsby-plugin-transition-link"
import { graphql } from "gatsby"
import { Typography, Button } from "@material-ui/core"
import { Facebook, Twitter, WhatsApp } from "@material-ui/icons"
import FacebookIcon from '../images/icons/facebook.svg'
import TwitterIcon from '../images/icons/twitter.svg'
import WhatsappIcon from '../images/icons/whatsapp.svg'
import Girl from "../images/assets/girl-square.png"
import SEO from "../components/seo"
import Moment from "react-moment"
import ReactMarkdown from "react-markdown"
import { DiscussionEmbed } from "disqus-react"

const Post = ({ pageContext: node }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME || "saferoom.com",
    config: { identifier: node.slug },
  }

  return (
    <div>
      <SEO title={node.title} />
      <div className="container-fluid">
        <div className="row blog-single">
          <div className="col-lg-8 post-content">
            <div className="row">
              <div
                className="blog-single-image"
                style={{
                  backgroundImage: `url('${
                    node.image ? node.image.childImageSharp.fluid.src : Girl
                  }')`,
                }}
              />
              <div className="col-12 mt-4 mb-4 p-0">
                <Typography variant="h2" color="secondary" className="t-grand">
                  {node.title}
                </Typography>
              </div>
              <div className="col-12 mt-1 mb-4 p-0">
                <Typography className="w-5" variant="caption" color="secondary">
                  By: Rosemary
                </Typography>
                <br />
                <Typography className="w-5" variant="caption" color="secondary">
                  <Moment format="Do MMM, YYYY - LT">{node.publishDate}</Moment>
                </Typography>
              </div>

              <Typography
                className=""
                variant="body2"
                align="justify"
                color="textPrimary"
              >
                <ReactMarkdown source={node.content} />
              </Typography>
            </div>
          </div>
          <div className="col-lg-4 share-and-comment ">
            {/* <div className="">
              <Typography
                variant="h3"
                align="center"
                color="secondary"
                className="t-grand"
              >
                Share This Post
              </Typography>
              <div className="social-button-container">
                <img src={WhatsappIcon} alt="Share to whatsapp" className="social-button"/>
                <img src={FacebookIcon} alt="Share to facebook" className="social-button"/>
                <img src={TwitterIcon} alt="Share to twitter" className="social-button"/>
              </div> */}
            <Typography
              variant="h2"
              color="secondary"
              className="t-grand"
            >
              Comments
            </Typography>
            <div className="disqus">
              <DiscussionEmbed {...disqusConfig} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
