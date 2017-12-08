import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import About from "../about"
import Projects from "../projects"
import Textile from "../textile"
import "./style.css"

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="home">
          <div className="Hero">
            <div className="firstColumn">
              <a><Link to="/textile">Textile Work</Link></a>
              <Route path="/textile" component={Textile} />
            </div>
            <div className="About">
              <a><Link to="/about">About</Link></a>
              <p>Textile Artist learning to code for the web</p>
              <Route path="/about" component={About} />
            </div>
            <div className="secondColumn">
              <a><Link to="/projects">Web Projects</Link></a>
              <Route path="/projects" component={Projects} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Home
