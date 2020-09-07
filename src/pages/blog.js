import React, { useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Moment from "react-moment"
import { Typography, Button } from "@material-ui/core"
import Girl from "../images/assets/girl-square.png"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { useFormik } from "formik"
import Yup from "yup"

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + "..."
}

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPost(sort: { order: DESC, fields: publishDate }) {
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <SEO title="Stories" />
      <div id="blog">
        <Typography
          variant="h1"
          color="secondary"
          className="t-grand home-title"
          align="center"
        >
          Stories
        </Typography>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-container row text-center text-md-left">
              {data.allStrapiPost.nodes.map(blog => (
                <div className="row" key={blog.id}>
                  <div className="col-md-6 p-2">
                    <div
                      className="blog-single-image"
                      style={{
                        backgroundImage: `url('${
                          blog.image
                            ? blog.image.childImageSharp.fluid.src
                            : Girl
                        }')`,
                      }}
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
            <div className="fixed">
              <Typography
                variant="subtitle1"
                color="secondary"
                className="text-center"
              >
                Email me for new stories
              </Typography>
              <div>
                {/* Begin Mailchimp Signup Form */}

                <div id="mc_embed_signup" className="text-center">
                  <form
                    action="https://app.us17.list-manage.com/subscribe/post?u=3f3e830a6f56ec571ab9e9e52&id=8e888d69b5"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <input
                        type="email"
                        name="EMAIL"
                        className="sr-input mt-3"
                        id="mce-EMAIL"
                        placeholder="Email Address"
                        required
                      />
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_3f3e830a6f56ec571ab9e9e52_8e888d69b5"
                          tabIndex={-1}
                          defaultValue
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <Button
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="sr-button"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
