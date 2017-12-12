import React from "react"
import projects from "./data/projects.js"
import Projectpreview from "./projectsPreview/index.js"
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
            {projects.map(project => (
              <Projectpreview
                name={project.name}
                description={project.description} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
