import React from "react"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="card-wrapper">
        <div className="projectCard">
          <a href={this.props.site}>
            <div className="front" style={{ borderColor: this.props.color }}>
              <h2>{this.props.name}</h2>

              <div className="back" style={{ borderColor: this.props.color }}>
                <p>{this.props.description}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }

}
