const React = require("react")
const shows = require("../public/data")


// <div className="container">
//         {data.shows.map((show) => (<h3>{show.title}</h3>))}
//     </div>
const Search = () => (
    <pre>
        <code>
            {JSON.stringify(shows, null,4)}
        </code>
    </pre>
)

module.exports = Search