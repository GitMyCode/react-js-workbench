const React = require("react")
const data = require("../public/data")
const ShowCard = require('./ShowCard')


const Search = () => (
  <div className="container">
         {data.shows.map((show) => (
             <ShowCard {...show} key={show.imdbID}/>
             )

             )}
     </div>
)


module.exports = Search