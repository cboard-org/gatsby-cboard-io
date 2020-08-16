import React from "react"

const Contact = () => {
  return (
    <div id="contact">
      <div className="container position-relative">
        <form name="contact" netlify>
          <div className="h-100 my-3">
            <input
              type="text"
              name="name"
              aria-label="Name"
              required
              autoComplete="off"
            />
            <label className="mx-3" for="name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="my-3 position-relative">
            <input
              type="email"
              name="email"
              aria-label="Email"
              required
              autoComplete="off"
            />
            <label className="mx-3" for="email">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="my-3 position-relative">
            <textarea
              type="text"
              name="message"
              rows="5"
              required
              autoComplete="off"
              aria-label="Message"
            />
            <label className="mx-3" for="message">
              <span className="content-name">Message</span>
            </label>
          </div>
          <div className="btn btn-outline btn-xl">
            <a  cta="Send" type="submit" >
            Send Contact
            </a>
          </div>
        </form>
      </div></div>
  )
}

export default Contact