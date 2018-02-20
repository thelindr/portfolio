import React from "react"
import projects from "./data/projects.js"
import ProjectPreview from "./projectsPreview/index.js"
import Navigation from "./navigation/index.js"
import "./style.css"

class Projects extends React.Component {

  render() {
    return (
      <div className="Projects">
        <div className="Header">
          <h1>Web Development Projects</h1>
        </div>
        <Navigation />
        <div className="Container">
          {projects.map(project => (

            <ProjectPreview
              key={project.id}
              url={project.id}
              name={project.name}
              description={project.description}
              imageURL={project.imageURL}
              site={project.site}
              color={project.color} />
          ))}

        </div>
      </div>
    )
  }
}

export default Projects
