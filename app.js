// const heading=React.createElement("h1",{},"hello namaste React! by ")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


/* 

<div id="parent">

    <div id="child">

        <h1>I'm H1 Tag</h1>

    </div>

</div> 


<div id="parent">

    <div id="child1">

        <h1>I'm H1 Tag-1</h1>
        <h1>I'm H1 Tag-2</h1>

    </div>

    <div id="child2">

        <h1>I'm H1 Tag-3</h1>
        <h1>I'm H1 Tag-4</h1>

    </div>

</div> 

*/

// this is the structure for the belwow code


const parent = React.createElement("div",{id: "parent"}, [React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is an H1 tag-1!!"),React.createElement("h1",{},"This is an H1 tag-2!!")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"This is an H1 tag-3!!"),React.createElement("h1",{},"This is an H1 tag-4!!")])])

//nested structure by arrays.

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent)