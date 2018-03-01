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
    const hasDemo = this.state.project.site
    return (
      <div className="ProjectPage" ref={(el) => { this.projectView = el }}>

        <div className="descriptionBox">
          <div className="header">
            <h1>{this.state.project.name}</h1>
            <h4>{this.state.project.language}</h4>
          </div>
          {this.state.project.description}
          <div className="linkHolder">
            {hasDemo ?
              <a href={this.state.project.site}>View Demo</a> : null}
            <a href={this.state.project.code}>View Code</a>
          </div>
        </div>
        <div className="imageCard" style={{ backgroundImage: `url(${this.state.project.imageURL})` }} />

      </div>
    )
  }

}
