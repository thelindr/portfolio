import React from "react"
import projects from "../data/projects"
import "./style.css"

export default class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    const project = projects.find(p => (p.id === this.props.match.params.id))

    this.setProject(project)
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const project = projects.find(p => (p.id === this.props.match.params.id))
      this.setProject(project)
    }
  }

  setProject = (project) => {
    this.setState({
      project
    })
    this.projectView.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <div className="ProjectPage" ref={(el) => { this.projectView = el }}>

        <div className="descriptionBox">
          <h1>{this.state.project.name}</h1>
          {this.state.project.description}
          <a href={this.state.project.site}>View demo</a>
        </div>
        <div className="imageCard" style={{ backgroundImage: `url(${this.state.project.imageURL})` }} />

      </div>
    )
  }

}
