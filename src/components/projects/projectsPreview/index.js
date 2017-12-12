import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class projectpreview extends React.Component {

  render() {
    return (
      <div className="inner">
        <div className="container">
        <Link to={`/projects/${this.props.url}`} style={{ textDecoration: 'none' }}>
          <h2>{this.props.name}</h2>
        </Link>

        <div className="description">
          {this.props.description}
        </div>
        </div>
      </div>
    )
  }

}
