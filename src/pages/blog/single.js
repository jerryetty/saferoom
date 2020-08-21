import React from "react"
import Link from "gatsby-plugin-transition-link"
import { Typography, Button } from "@material-ui/core"
import { Facebook, Twitter, WhatsApp } from "@material-ui/icons"
import Girl from "../../images/assets/girl-square.png"
import SEO from "../../components/seo"

const SingleBlog = () => {
  return (
    <div>
      <SEO title={`Post title`} />
      <div className="container-fluid">
        <div className="row blog-single">
          <div className="col-lg-8 post-content">
            <div className="row">
              <div
                className="blog-single-image"
                style={{ backgroundImage: `url('${Girl}')` }}
              />
              <div className="col-12 mt-4 mb-4 p-0">
                <Typography variant="h2" color="secondary" className="t-grand">
                  You can't eat pretty
                </Typography>
              </div>
              <div className="col-12 mt-1 mb-4 p-0">
                <Typography className="w-5" variant="caption" color="secondary">
                  By: Rosemary
                </Typography>
                <br/>
                <Typography className="w-5" variant="caption" color="secondary">
                  4<small>th</small> February, 2020
                </Typography>
              </div>

              <Typography
                className=""
                variant="body2"
                align="justify"
                color="textPrimary"
              >
                I have a personal concern, not sure if it's worth the time and
                attention but anyway let's do this. <br />
                <br /> In this modern-day and time we have very many millennials
                raised to believe that they are too pretty to be broke, every
                one of us is out there trying to look so good and flawless and
                along the way we all somehow to forget to focus, grab
                opportunities presented to us and actually earn a living and
                maybe own the money we work so hard to look like we have. <br />
                <br /> Anyway don't get me wrong, I don't mean looking good is
                bad but putting in efforts to look good using someone else's
                money is what doesn't make sense to me and I'm so unapologetic
                to whoever feels offended in any way. My main focus is on
                ladies... <br />
                <br /> In the past women only occupied the place below the man ,
                ate scraps of the man's food, in some cultures women were even
                restricted from particular foods only reserved for the man, the
                primary role of a woman was childbearing and domestic work, the
                livelihood of a woman totally depended on what the man would
                offer so every girl was raised to please her man so he can take
                care of her and her children. <br />
                <br /> In the middle age some brave women took a foot forward
                and created a place for us in the working world , first as
                secretaries hence taking a place next to a man but still below
                him , later the modern-day woman fought for emancipation and
                equal rights which were given and still, the world is evolving
                and we see women in positions of power. <br />
                <br /> In this age women can work and also put food to the
                table, a woman can provide for herself without support from a
                man , marriage has become a choice so one can choose their
                partner as well as divorce if things don't go the way she feels
                they should without fear of being homeless or her children
                lacking but all this is because women are now independent.{" "}
                <br />
                <br /> Shocking though, the new generation is slowly
                deteriorating and developing a lazy attitude our grandmothers
                fought against, a generation of many good looking but jobless
                women who live off grants from multiple "blessers" and are not
                even motivated to work. <br />
                <br /> My fellow young ladies its time to step up to the
                opportunities that have been presented to us, if we don't take
                our place at the table, that door will close surely and above
                all let's be informed, feminists. <br />
                <br /> Lets not only look pretty but work to be everything we
                look because when the beauty fades and he is gone," you won't
                eat pretty."
              </Typography>
            </div>
          </div>
          <div className="col-lg-4 share-and-comment ">
            <div className="">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                className="t-grand"
              >
                Share Now
              </Typography>
              <div className="social-button-container">
                <Facebook color="secondary" className="social-button" />
                <Twitter color="secondary" className="social-button" />
                <WhatsApp color="secondary" className="social-button" />
              </div>

              <Typography
                variant="h2"
                align="left"
                color="textPrimary"
                className="t-grand mt-5"
              >
                Leave a comment
              </Typography>

              <input type="text" placeholder="Name" className="mt-3 sr-input" required id='name' name='name' />
              <input
                type="email"
                placeholder="Email"
                className="mt-3 sr-input"
                id='email'
                name='email'
                required
              />
              <textarea
                placeholder="Comment"
                name="comment"
                id="comment"
                required
                cols="30"
                rows="10"
                className="sr-input mt-3"
              ></textarea>
              <Button className="mt-4 sr-button">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
