import React from "react"
import projects from "./data/projects.js"
import ProjectPreview from "./projectsPreview/index.js"
import "./style.css"

class Projects extends React.Component {

  render() {
    return (
      <div className="Projects">
        <div className="Header">
          <h1>Web Development Projects</h1>
        </div>
        <div className="Container">
          {projects.map(project => (

            <ProjectPreview
              name={project.name}
              description={project.description}
              url={project.url} />
          ))}

        </div>
      </div>
    )
  }
}

export default Projects
