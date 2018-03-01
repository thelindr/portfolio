import React from "react"
import "./style.css"

export default class Welcome extends React.Component {

  render() {
    return (
      <div className="welcomePage">
        <div className="messageBox">
          <h1>Welcome!</h1>
          <p>
            Here you will find a selection of projects
            I made as a student at the Technigo Bootcamp
            - a 12 week program to becoming a junior Web Developer.
            During the program we had one individual assignment each day,
            making a total of approximately 50 coding solutions.
            The 12 weeks were divided into 6 sprints, in which a bigger project
            was made in a team of four people.
          </p>
        </div>
        <div className="arrowBox">
          <div className="arrowDown" />
        </div>
      </div>
    )
  }

}
