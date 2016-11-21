const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const Landing =  () => (
    <div className="app-container">
      <div className="home-info">
        <h1 className="title">TIITIresd</h1>
        <input className="search" type="text" placeholder="search"/>
        <button className="browse-all">or Browse all</button>
      </div>
    </div>
  )

module.exports = Landing
