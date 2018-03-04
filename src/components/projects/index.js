import React from "react"
import FlipMove from "react-flip-move"
import projects from "./data/projects.js"
import ProjectPreview from "./projectsPreview/index.js"
import Welcome from "./welcome/index.js"
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
    return (
      <div className="Projects">

        <Welcome />

        <Navigation />

        <div className="filterButtons">
          <button
            className={`${this.state.activeButton === "all" ? "activeButton" : "inactiveButton"}`}
            onClick={this.setProject}>
            All Projects
          </button>
          <button
            className={`${this.state.activeButton === "team" ? "activeButton" : "inactiveButton"}`}
            onClick={this.filterProjects}
            value="team">
            Team Projects
          </button>
          <button
            className={`${this.state.activeButton === "individual" ? "activeButton" : "inactiveButton"}`}
            onClick={this.filterProjects}
            value="individual">
            Individual Projects
          </button>
        </div>
        <div className="projectHolder">
          <FlipMove className="Container" duration={500} easing="ease-in-out">
            {this.state.allProjects.map(allProjects => (

              <ProjectPreview
                key={allProjects.id}
                url={allProjects.id}
                name={allProjects.name}
                thumbnail={allProjects.thumbnail} />
            ))}
          </FlipMove>
        </div>

      </div>
    )
  }
}

export default Projects
