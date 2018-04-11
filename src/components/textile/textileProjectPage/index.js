import React from "react"
import projects from "../data/textileprojects"
import "./style.css"

export default class textileProjectPage extends React.Component {

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

        <h1>{this.state.project.id}</h1>

      </div>
    )
  }

}
