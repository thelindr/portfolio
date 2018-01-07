import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="card-wrapper">
        <div className="projectCard">
          <Link to={`/projects/${this.props.url}`} style={{ textDecoration: "none" }}>
            <div className="front">
              <h2>{this.props.name}</h2>

              <div className="back">
                <p>{this.props.description}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

}
