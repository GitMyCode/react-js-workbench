const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require("./Header")
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    params: object
  },
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event })
  },
  render () {
    return (
      <div className="container">
       <Header handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm} showSearch/>
        <div className="show">
          {
            this.props.route.shows
              .filter((show) => `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
              .map((show) => (<ShowCard {...show} key={show.imdbID} />))}
        </div>
      </div>
    )
  }
})

module.exports = Search
