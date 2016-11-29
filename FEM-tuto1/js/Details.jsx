const React = require('react')
const Header = require('./Header')
const { connector } = require("./Store")


class Details extends React.Component {
  render () {
    const {title, description, year, poster, trailer} = this.props.shows[this.props.params.id]

    return (
        <div className="container">
            <Header />
            <div className="video-info">
                <h1 className="video-title">{title}</h1>
                <h2 className="video-year">({year})</h2>
                <img className="video-poster" src={`public/img/posters/${poster}`} />
                <p className="video-description">{description}</p>
            </div>
            <div className="video-container">
                <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0$amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
            </div>
        </div>
        )
  }
}

const { object, arrayOf } = React.PropTypes

Details.propTypes = {
  params: object.isRequired,
  shows: arrayOf(object).isRequired
}

module.exports = connector(Details)
