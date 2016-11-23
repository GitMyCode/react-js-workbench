const React = require('react')
const Header = require('./Header')

const Layout = (props) => (
    <div>
        <div className="app-container">
            {props.children}
        </div>
    </div>
)

const {element} = React.PropTypes

Layout.propTypes = {
    children: element
}

module.exports = Layout
