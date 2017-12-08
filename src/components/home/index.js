import React from "react"
import "./style.css"

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="Hero">
          <div className="firstColumn">
            <a href="url">Textile Work</a>
          </div>
          <div className="About">
            <a href="url">About</a>
            <p>Textile Artist learning to code for the web</p>
          </div>
          <div className="secondColumn">
            <a href="url">Web Projects</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
