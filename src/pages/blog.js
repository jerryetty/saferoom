import React, { useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Moment from 'react-moment'
import {
  Typography,
  Button,
} from "@material-ui/core"
import Girl from "../images/assets/girl-square.png"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPost(sort: {order: DESC, fields: publishDate}) {
        nodes {
          id
          commentCount
          content
          image {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          createdAt(formatString: "")
          likeCount
          postStatus
          slug
          strapiId
          publishDate
          title
          updatedAt(formatString: "")
          updated_by {
            id
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Blog" />
      <div id="blog">
        <Typography
          variant="h1"
          color="secondary"
          className="t-grand home-title"
          align="center"
        >
          Blog
        </Typography>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-container row text-center text-md-left">
              {data.allStrapiPost.nodes.map(blog => (
                <div className="row" key={blog.id}>
                  <div className="col-md-6 p-2">
                    <div
                      className="blog-single-image"
                      style={{ backgroundImage: `url('${blog.image ? blog.image.childImageSharp.fluid.src : Girl}')` }}
                      id="service-image"
                    />
                    {/* <Img
                      fluid={
                        blog.image ? blog.image.childImageSharp.fluid : Girl
                      }
                      alt={blog.title}
                      className="blog-image"
                    /> */}
                    {/* <img src={blog.image ? blog.image : Girl} alt={blog.title} className="blog-image" /> */}
                  </div>
                  <div className="col-md-6 p-2 d-flex justify-content-center flex-column">
                    <Typography
                      variant="h4"
                      color="secondary"
                      className="t-grand w-5"
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      className="mt-2 w-4"
                      variant="body2"
                      color="textPrimary"
                    >
                      {truncateString(blog.content, 150)}
                    </Typography>

                    <Typography
                      className="mt-3"
                      variant="caption"
                      color="secondary"
                    >
                      By: Rosemary
                    </Typography>
                    <Typography
                      className=""
                      variant="caption"
                      color="secondary"
                    >
                      <Moment format="Do MMM, YYYY - LT">
                        {blog.publishDate}
                      </Moment>
                    </Typography>
                    <div className="mt-3">
                      <AniLink
                        to={"/post/" + blog.slug}
                        paintDrip
                        duration={1}
                        hex="#240026"
                      >
                        <Button variant="text" className="sr-button">
                          Read More
                        </Button>
                      </AniLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 relative">
            <div className="p-5 fixed">
              <Typography variant="h5" color="secondary" className="t-grand">
                Get the latest updates
              </Typography>
              <div className="sr-form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-3 sr-input"
                />
                <AniLink to="/blog" paintDrip duration={1} hex="#240026">
                  <Button className="mt-4 sr-button">Subscribe</Button>
                </AniLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
