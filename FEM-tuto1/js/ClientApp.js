 var div = React.DOM.div
 var h1 = React.DOM.h1

var MyTitle = React.createClass({
    render() {
        return (
            div(null,
                h1(null, this.props.title)
            )
        )
    }
})

 var myFirstComponent = (
     div(null,
         React.createElement(MyTitle, {title: "TIIIIERDFDER"})
     ))

 ReactDOM.render(myFirstComponent, document.getElementById("app"))