// localStorage.setItem("data", "marwa")
// let data = [
//     { id: 1, name: "marwa", age: 25 },
//     { id: 2, name: "ahmed", age: 30 }
// ]
// localStorage.setItem("data", JSON.stringify(data))

//JSON.parse
// let result = localStorage.getItem("data")
// result = JSON.parse(result)
// console.log(result)
// console.log(result[0])
// console.log(typeof result)


/*
parent, element, text, classes, id, attributes

*/

const createMyOwnElement = (parent, ele, txt, classes, attrName, attrVal) =>{
    let myNewEl = document.createElement(ele)
    parent.appendChild(myNewEl)
    if(txt) myNewEl.textContent = txt
    if(classes) myNewEl.classList = classes
    myNewEl.setAttribute(attrName, attrVal)
    return myNewEl
}
const allData=document.querySelector("#allData")
// createMyOwnElement( allData , "p" , "hello all", "myClass x y" )
// let ul = createMyOwnElement(allData, "ul", null)
// createMyOwnElement(ul, "li", "hi")

// createMyOwnElement(allData, "h2", "hi")


createMyOwnElement(allData, "p", "hello from js", "myClass", "id", "myId")



let myattrs = [
    {attrName: "id", attrVal:"one"},
    {attrName: "colspan", attrVal:"5"},
    {attrName: "for", attrVal:"abc"},
    {attrName: "class", attrVal:"btn btn-primary"},
    {attrName: "href", attrVal:"single.html"},
]

myattrs.forEach(a=> x.setAttribute(a.attrName, a.attrVal))