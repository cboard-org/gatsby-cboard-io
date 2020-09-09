import React from "react"

const Contact = () => {
  return (
    <div id="contact">
      <div className="container position-relative">
        <form name="contact" netlify>
          <div className="field">
            <label className="label" for="name">
              Name
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                aria-label="Name"
                required
                autoComplete="on"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="name">
              Email
            </label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                aria-label="Email"
                required
                autoComplete="on"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" for="message">
              Message
            </label>
            <div className="control">
              <textarea
                type="text"
                name="message"
                rows="5"
                required
                aria-label="Message"
                className="textarea"
                autoComplete="on"
              />
            </div>
          </div>
          <div className="btn btn-outline btn-xl">
            <a cta="Send" type="submit" >
              Send Contact
            </a>
          </div>
        </form>
      </div></div>
  )
}

export default Contact