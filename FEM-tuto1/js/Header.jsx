const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type="text" className="search-input" placeholder="search" value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else { 
      utilSpace = (
        <h2 className="header-back">
          <Link to='/search'>Back</Link>
        </h2>
        )
    }

    return (
      <header>
        <h1 className="brand">
          <Link to="/" className="brand-ling">
             svideo
          </Link>
        </h1>
       {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)

