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
      allProjects: [],
      activeButton: "all"
    }
  }

  componentDidMount() {
    this.setProject()
  }

  setProject = () => {
    this.setState({
      allProjects: projects,
      activeButton: "all"
    })
  }

  filterProjects = (event) => {
    const buttonValue = event.target.getAttribute("value")
    const filteredProjects = projects.filter((projects =>
      projects.type === buttonValue))
    this.setState({
      allProjects: filteredProjects,
      activeButton: buttonValue
    })
  }

  render() {
    const activeColor = "#8080800d"
    const inactiveColor = "#80808075"
    return (
      <div className="Projects">

        <div className="Header">
          <h1>Web Development Projects</h1>
        </div>

        <Navigation />

        <div className="filterButtons">
          <button
            style={{ backgroundColor: `${this.state.activeButton === "all" ? activeColor : inactiveColor}` }}
            onClick={this.setProject}>
            All Projects
          </button>
          <button
            style={{ backgroundColor: `${this.state.activeButton === "team" ? activeColor : inactiveColor}` }}
            onClick={this.filterProjects}
            value="team">
            Team Projects
          </button>
          <button
            style={{ backgroundColor: `${this.state.activeButton === "individual" ? activeColor : inactiveColor}` }}
            onClick={this.filterProjects}
            value="individual">
            Individual Projects
          </button>
        </div>

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
