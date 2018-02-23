import React from "react"
import FlipMove from "react-flip-move"
import projects from "./data/projects.js"
import ProjectPreview from "./projectsPreview/index.js"
import Navigation from "./navigation/index.js"
import "./style.css"

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allProjects: []
    }
  }

  componentDidMount() {
    this.setProject()
  }

  setProject = () => {
    this.setState({
      allProjects: projects
    })
  }

  filterProjects = (event) => {
    const filteredProjects = projects.filter((projects =>
      projects.type === event.target.getAttribute("value")))
    this.setState({
      allProjects: filteredProjects
    })
  }

  render() {
    console.log(this.state.allProjects)
    return (
      <div className="Projects">
        <div className="Header">
          <h1>Web Development Projects</h1>
        </div>
        <Navigation />
        <button onClick={this.filterProjects} value="team">Team Projects</button>
        <button onClick={this.filterProjects} value="individual">Individual Projects</button>
        <button onClick={this.setProject}>All Projects</button>
        <FlipMove className="Container" duration={500} easing="ease-in-out">
          {this.state.allProjects.map(allProjects => (

            <ProjectPreview
              projects={allProjects}
              key={allProjects.id}
              url={allProjects.id}
              name={allProjects.name}
              description={allProjects.description}
              imageURL={allProjects.imageURL}
              site={allProjects.site}
              language={allProjects.language}
              color={allProjects.color} />
          ))}
        </FlipMove>
      </div>
    )
  }
}

export default Projects
