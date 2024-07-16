// // ReactDOM.render(<ul> <li>Names</li><li>Clases</li> </ul>
// //     , document.getElementById("root"))

// ReactDOM.render(<h1 class="header">Head</h1>, document.appendChild("#root"))

const h1 = document.createElement("h1")
h1.textContent = "This is imperative"
h1.className = "header"
document.getElementById("root").append(h1)