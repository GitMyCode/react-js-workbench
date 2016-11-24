const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')
const {Link} = require('react-router')
const { connector } = require('./Store')
const {hashHistory } = require('react-router')

class Landing extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }

  handleSearchTermEvent(event) {
    this.props.setSearchTerm(event.target.value)
  }

  gotoSearch(event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <div className="home-info">
          <h1 className="title">TIITIresd</h1>
          <form onSubmit={this.gotoSearch}>
            <input className="search" type="text" value={this.props.searchTerm} onChange={this.handleSearchTermEvent} placeholder="search" />
            <Link to='/search' className="browse-all">or Browse All</Link>
          </form>
        </div>
      </div>
    )
  }
}


const {func, string} = React.PropTypes
Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}


module.exports = connector(Landing)
