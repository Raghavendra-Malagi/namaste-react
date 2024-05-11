// let heading = React.createElement(
//     "h1",
//     {id:"Heading"},
//     "Hello world from React");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1>Hello dynamic h1</h1>
        <h2>I am dynamic h2</h2>
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hello dynamic h1"),
React.createElement("h2",{},"dynamic h2")
]
)
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);