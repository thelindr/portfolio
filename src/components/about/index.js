import React from "react"
import { Link } from "react-router-dom"
import Navigation from "../projects/navigation/index.js"
import "./style.css"

class About extends React.Component {
  render() {
    return (
      <div className="Aboutpage">
        <div className="navigate">
          <Navigation />
        </div>
        <div className="placeHolder">
          <h1>Hej!</h1>
          <p>I am Therese and I like to create things.
        I have been creating with textile as my medium for the last five years.
        I recently got into creating web applications. At the moment I am attending
        the <a href="http://www.technigo.io">Technigo Boot Camp</a> in Stockholm, learning React.
          </p>
        </div>
        <div className="footer">
          <Link to="/textile" style={{ textDecoration: "none", color: "#0f2581" }}>
            <h3>Textile Projects</h3>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none", color: "#247339" }}>
            <h3>Web Projects</h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default About
