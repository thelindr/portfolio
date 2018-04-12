import React from "react"
import { Link } from "react-router-dom"
import textileprojects from "./data/textileprojects.js"
import TextileHeader from "./header/index.js"
import "./style.css"

class Textile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageLoaded: false
    }
  }

  onLoad = () => {
    this.setState(() => ({ imageLoaded: true }))
  }

  render() {
    return (
      <div>
        <TextileHeader />
        <div className="textilePage">
          <div className="columnBox">
            {textileprojects.map((project) => {
              if (project.firstimage && project.secondimage) {
                return (
                  <Link to={`/textile/${project.id}`}>
                    <div className="imageCard">
                      <img
                        onLoad={this.onLoad}
                        style={this.state.imageLoaded ? { opacity: 1 } : { opacity: 0 }}
                        id={project.id}
                        src={project.firstimage}
                        alt="projectimage" />
                      <img
                        onLoad={this.onLoad}
                        style={this.state.imageLoaded ? { opacity: 1 } : { opacity: 0 }}
                        id={project.id}
                        src={project.secondimage}
                        alt="projectimage" />
                    </div>
                  </Link>
                )
              } else {
                return (
                  <Link to={`/textile/${project.id}`}>
                    <div className="imageCard">
                      <img
                        onLoad={this.onLoad}
                        style={this.state.imageLoaded ? { opacity: 1 } : { opacity: 0 }}
                        id={project.id}
                        src={project.firstimage}
                        alt="projectimage" />
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Textile
