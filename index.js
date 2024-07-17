// // ReactDOM.render(<ul> <li>Names</li><li>Clases</li> </ul>
// //     , document.getElementById("root"))

// const elements = (
// <div>
//     <h1 className="header">This is JSX</h1>
//     <p>First heading</p>
// </div>
// )
// console.log(elements)
//  ReactDOM.render(elements, document.getElementById("root"))

// // const h1 = document.createElement("h1")
// h1.textContent = "This is imperative"
// h1.className = "header"
// document.getElementById("root").append(h1)

const navBar = (
<nav>
    <h1>website</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
) 


ReactDOM.render(navBar, document.getElementById("root"))