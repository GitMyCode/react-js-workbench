const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')
const {Link} = require("react-router")

const Landing =  () => (
    <div className="app-container">
      <div className="home-info">
        <h1 className="title">TIITIresd</h1>
        <input className="search" type="text" placeholder="search"/>
        <Link to='/search' className="browse-all">or Browse All</Link>
      </div>
    </div>
  )

module.exports = Landing
