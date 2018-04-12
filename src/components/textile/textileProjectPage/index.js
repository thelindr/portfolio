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
    const hasSecondImage = this.state.project.secondimage
    const hasThirdImage = this.state.project.thirdimage
    const hasFourthImage = this.state.project.fourthimage
    return (
      <div className="textileProjectPage" ref={(el) => { this.projectView = el }}>

        <img src={this.state.project.firstimage} alt={this.state.project.id} />
        {hasSecondImage &&
          <img src={this.state.project.secondimage} alt={this.state.project.id} />}
        {hasThirdImage &&
          <img src={this.state.project.thirdimage} alt="projectimage" />}
        {hasFourthImage &&
            <img src={this.state.project.fourthimage} alt="projectimage" />}

      </div>
    )
  }

}
