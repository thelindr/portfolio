import React from "react"
import "./style.css"

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <div className="Header">
          <h1>Web development projects</h1>
        </div>
        <div className="Container">
          <div className="ProjectCard">
            <p>projectcard</p>
          </div>
          <div className="ProjectCard">
            <p>projectcard</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
