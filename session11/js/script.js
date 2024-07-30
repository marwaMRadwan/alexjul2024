let data1 = ["a", "x","b", "x", "c","x", "d"]
// let data2 = ["e", "f", "f", "g"]
// console.log(data1.length)
// data1 = data1.concat(data2)
// console.log(data1)
// d = data1.splice(2,1)
// console.log(data1);
// console.log(d);
// console.log(data1.indexOf("x"))
// console.log(data1.lastIndexOf("x"))
// console.log(data1.includes("p"))
// let result = data1.join(" ")
// console.log(result)


// let name= ["marwa", "mona", "ahmed"]
// console.log(name.indexOf("m"))
// let ahmed = {name:"ahmed"}
// let hassan = {name: "hassan"}
// let arr = [ahmed, hassan]
// console.log(data1)
// let d = data1.slice( 1, 4 )
// console.log(data1)
// console.log(d)
// console.log(data1)
// let d = data1.sort()
// console.log(data1)
// console.log(d)
// data1.reverse()
// console.log(data1)

// data1.reverse( data1.sort() )

// const data = [
//     { userId: 1, id: 1, title: "delectus aut autem",
//     completed: false},
//     { userId: 10, id: 20,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true
//     }
//     ]
// let result = data.find(item => { 
    // return item.title.includes("ddsbjgdj")
    // return item.title.startsWith("ddsbjgdj")
    
// })

// let result = data.find(item => item.title.includes("d"))
// if(!result) console.log("item not found")
// else console.log(result)

// let x = data1.map(item => item+="l")
// console.log(x)
// console.log(data1)

// let grades = []
// for(let i=0; i<degrees.length; i++){
    //     if(degrees[i]>=90) grades.push("A")
    // }
// let degrees = [100, 50, 70, 80, 88, 95]
// ["A", "F", "C", "B", "B", "A"]

// let grades = degrees.map( d => {
//     if(d >= 90) return "A"
//     else if(d >= 80) return "B"
//     else if(d >= 70) return "C"
//     else if(d >= 60) return "D"
//     else return "F"
// })
// console.log(grades);

/* DOM */

// let div = document.getElementsByTagName("div")
// console.log(div)
// let div2 = document.getElementsByClassName("two")
// console.log(div2)
// let div1 = document.getElementById("one")
// console.log(div1);
// let a1 = document.querySelector("#one")
// a1 = document.querySelectorAll("div")
// a1 = document.querySelectorAll(".two")
// console.log(a1[0]);
// let div = document.querySelector("div")
// div.textContent ="Hello"
// div.innerText += " abc"
// div.innerHTML = "<h3>hello</h3>"
// console.log(div.innerHTML)

// document.write(document.querySelector("div").getAttribute("class"))

// let div = document.querySelector("div")
// div.setAttribute("class", "myclass")


// let div = document.createElement("div")
// let body = document.querySelector("body")
// body.appendChild(div)

let myBtn = document.querySelector("button")
// myBtn.addEventListener("click", function(e){
//     console.log(this)
//     let myDiv = document.createElement("div")
//     myDiv.textContent = "Hello"
//     myDiv.setAttribute("class", "myclass")
//     document.querySelector("body").appendChild(myDiv)
// })
let myDiv = document.querySelector("div")
myBtn.addEventListener("mouseleave", function(e){
    // this.innerText=="Hide" ? 
    //     this.innerText="Show"
    //     : this.innerText="Hide"
    if(this.innerText=="Hide"){
        this.innerText="Show"
        myDiv.style.display = "none"
    }
    else{
        this.innerText="Hide"
        myDiv.style.display = "block"
    }
})

myBtn.addEventListener("mouseover", function(e){
    // this.innerText=="Hide" ? 
    //     this.innerText="Show"
    //     : this.innerText="Hide"
    if(this.innerText=="Hide"){
        this.innerText="Show"
        myDiv.style.display = "none"
    }
    else{
        this.innerText="Hide"
        myDiv.style.display = "block"
    }
})




