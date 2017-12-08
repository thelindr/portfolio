import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="Hero">
          <div className="firstColumn">
            <a><Link to="/textile">Textile Work</Link></a>
          </div>
          <div className="About">
            <a><Link to="/about">About</Link></a>
          </div>
          <div className="secondColumn">
            <a><Link to="/projects">Web Projects</Link></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
