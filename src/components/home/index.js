import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="Hero">
          <div className="firstColumn">
            <div className="textileLinkHolder">
              <a><Link to="/textile">Textile Work</Link></a>
            </div>
            <img src="/1639271_therese_lindroth_foto_ekaterina_lukoshkova_1_970.jpg" alt="textileimage" />
          </div>
          <div className="About">
            <a><Link to="/about">About</Link></a>
          </div>
          <div className="secondColumn">
            <a><Link to="/projects">Web Projects</Link></a>
          </div>
        </div>
        <div className="homeFoot">
          <h1 id="footer">©Therese Lindroth</h1>
        </div>
      </div>
    )
  }
}

export default Home
