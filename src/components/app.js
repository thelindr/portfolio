import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Textile from "./textile"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/textile" component={Textile} />
        </div>
      </BrowserRouter>

    )
  }

}

export default App
