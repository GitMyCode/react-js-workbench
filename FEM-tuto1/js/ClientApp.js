 var div = React.DOM.div
 var h1 = React.DOM.h1
 var myFirstComponent = (
     div({ style: { color: 'red' } },
         h1(null, "Tdsfdfjsdkfjlksdf")
     ))

 ReactDOM.render(myFirstComponent, document.getElementById("app"))