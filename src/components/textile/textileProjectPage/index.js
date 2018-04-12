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
      <div className="textileProjectPage">

        <img
          src={this.state.project.firstimage}
          alt={this.state.project.id}
          ref={(el) => { this.projectView = el }} />
        {this.state.project.secondimage &&
          <img src={this.state.project.secondimage} alt={this.state.project.id} />}
        {this.state.project.thirdimage &&
          <img src={this.state.project.thirdimage} alt="projectimage" />}
        {this.state.project.fourthimage &&
            <img src={this.state.project.fourthimage} alt="projectimage" />}

      </div>
    )
  }

}
