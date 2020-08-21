import React, { useEffect } from "react"
import DepressionImage from "../images/services/depression-therapy.jpg"
import { Typography, Button } from "@material-ui/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import Link from "gatsby-plugin-transition-link"
import { TimelineMax, TweenMax } from "gsap"

const SingleService = ({ pageContext: node }) => {
  useEffect(() => {
    const tl = new TimelineMax()
    tl.from("#service-image", {
      x: -100,
      opacity: 0,
      duration: 0.5,
    })
    tl.from("#service-title", {
      y: -100,
      opacity: 0,
      duration: 0.5,
    })
    tl.from("#service-description", {
      y: 10,
      opacity: 0,
      duration: 0.5,
    })
    tl.from("#booking-form", {
      x: 100,
      opacity: 0,
      duration: 1,
    })
  }, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(140, "Character limit exceeded")
      .required("Please enter your name"),
    email: Yup.string()
      .min(1, "Description is too short")
      .required("Please enter your email"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      appointmentDate: "",
      createdAt: Date.now(),
      notes: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values)
      setSubmitting(true)
      handleSubmit(values)
      resetForm()
      setSubmitting(false)
    },
  })

  const handleSubmit = (data) => {
    // Submitting logic goes here
    console.log(data)
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row service-single-container">
          <div className="col-lg-6">
          
            <Typography
              variant="h2"
              id="service-title"
              color="secondary"
              className="t-grand mb-2"
            >
              {node.name}
            </Typography>
            <div
              className="blog-single-image mt-4 mb-4"
              style={{ backgroundImage: `url('${DepressionImage}')` }}
              id="service-image"
            />
            <Typography
              className="mt-2"
              variant="body2"
              align="justify"
              color="textPrimary"
              id="service-description"
            >
              {node.description}
            </Typography>
          </div>
          <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>
              <div id="booking-form">
                <Typography
                  variant="h4"
                  align="left"
                  color="secondary"
                  className="t-grand mt-5"
                >
                  Book a session
                </Typography>
                <Typography className='mt-3' variant="body2" color="textPrimary">
                  First we shall need some information
                </Typography>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 sr-input"
                  required
                  name="name"
                  id="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-3 sr-input"
                  required
                  name="email"
                  id="email"
                />
                <input
                  type="tel"
                  placeholder="Telephone Number"
                  className="mt-3 sr-input"
                  id="telephone"
                  name="telephone"
                />
                <Typography className='mt-4' variant="body2" color="textPrimary">
                  Pick a date for the session
                </Typography>
                <input
                  type="date"
                  className="mt-2 sr-input"
                  id="appointmentDate"
                  name="appointmentDate"
                />
                <textarea
                  placeholder="Additional Notes"
                  name="notes"
                  id="notes"
                  required
                  cols="30"
                  rows="10"
                  className="sr-input mt-3"
                ></textarea>
                <Button className="mt-4 sr-button" type='submit' >Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleService
