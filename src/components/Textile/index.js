import React from "react"
import { Link } from "react-router-dom"
import textileprojects from "./data/textileprojects.js"
import TextileHeader from "./header/index.js"
import "./style.css"

class Textile extends React.Component {

  render() {
    return (
      <div>
        <TextileHeader />
        <div className="TextilePage">
          <div className="marginTop" />
          {textileprojects.map((project) => {
            if (project.firstimage && project.secondimage) {
              return (
                <Link to={`/textile/${project.id}`}>
                  <div className="imageCard">
                    <img id={project.id} src={project.firstimage} alt="projectimage" />
                    <img id={project.id} src={project.secondimage} alt="projectimage" />
                  </div>
                </Link>
              )
            } else {
              return (
                <Link to={`/textile/${project.id}`}>
                  <div className="imageCard">
                    <img id={project.id} src={project.firstimage} alt="projectimage" />
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default Textile
