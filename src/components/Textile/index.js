import React from "react"
import { Link } from "react-router-dom"
import textileprojects from "./data/textileprojects.js"
import "./style.css"

class Textile extends React.Component {
  render() {
    return (
      <div className="TextilePage">
        {textileprojects.map((project) => {
          return (
            <div className="imageGrid">
              <Link to={`/textile/${project.id}`}>
                <img id={project.id} src={project.firstimage} alt="projectimage" />
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Textile
