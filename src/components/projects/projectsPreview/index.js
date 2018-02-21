import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <div>
        <Link to={`/projects/${this.props.url}`}>
          <div className="card-wrapper">
            <img src={this.props.imageURL} alt="" />
            <h2>{this.props.name}</h2>
          </div>
        </Link>
      </div>
    )
  }

}
