import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Home extends React.Component {

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
      <div className="home">
        <div className="Hero">
          <div className="firstColumn" style={{ overflow: "hidden" }}>
            <div className="textileLinkHolder">
              <a><Link to="/textile">Textile Work</Link></a>
            </div>
            <img
              onLoad={this.onLoad}
              src="/1639271_therese_lindroth_foto_ekaterina_lukoshkova_1_970.jpg"
              alt="textileimage"
              style={this.state.imageLoaded ? { opacity: 1 } : { opacity: 0 }} />
          </div>
          <div className="About">
            <a><Link to="/about">About</Link></a>
          </div>
          <div className="secondColumn">
            <a><Link to="/projects">Web Projects</Link></a>
          </div>
        </div>
        <div className="homeFoot">
          <h1 id="footer">© 2018 Therese Lindroth </h1>
          <h1 id="footer">Photo by Ekaterina Lukoshkova</h1>
        </div>
      </div>
    )
  }
}

export default Home
