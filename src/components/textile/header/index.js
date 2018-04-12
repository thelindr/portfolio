import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class TextileHeader extends React.Component {
  render() {
    return (
      <div className="textileHeader">
        <Link to="/textile" style={{ textDecoration: "none" }}>
          <h1>Therese Lindroth</h1>
        </Link>
      </div>
    )
  }
}

export default TextileHeader
