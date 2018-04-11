import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import ProjectPage from "./projects/projectPage/index.js"
import Textile from "./textile"
import textileProjectPage from "./textile/textileProjectPage/index.js"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/textile" component={Textile} />
          <Route path="/textile/:id" component={textileProjectPage} />
        </div>
      </HashRouter>

    )
  }

}

export default App
