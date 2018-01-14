import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigationBar">
        <div className="linkHolder">
          <a href="https://github.com/thelindr"><div className="githubLogo" />
          </a>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="homeLink" />
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="aboutLink" />
        </Link>
      </div>

    )
  }

}

export default Navigation
