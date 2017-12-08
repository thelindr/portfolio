import React from "react"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Textile from "./textile"

class App extends React.Component {

  render() {
    return (
      <div>
        <Home />
        {/* <Projects />
        <About /> */}
      </div>
    )
  }

}

export default App
