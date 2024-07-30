/* Array */
// const arr = [ "a1", "a2", "a3", 5, false ]
// arr[2]="marwa"
// // arr= "gh"
// let user = {
//     "name": "marwa",
//     "age": 39,
//     "email": "marwa@techsexperts.com",
//     "github": "marwaMRadwan",
//     "position": "Developer"
// }
// console.log(typeof arr)
// arr[0]
// user.name
// user["name"]

// const names = ['ahmed', 'hassan', 'mona', 'ibraheem']
// console.log(names.length)
// for(let index=0; index<names.length;index++){
//     console.log(`${index} => ${names[index]}`)
// }

// names.forEach((el, ind, arr) => {
//     console.log(`${ind} => ${el}`);
// })

// Function
// welcome()
// welcome("marwa radwan")

// function welcome( userName="Guest" ){
//     console.log(`welcome ${userName} to my home`)
// }

// welcome("noura")

// function add( x, y ){
//     return x+y
// }
// let res = add(5,3)

// let res1 = add(50,13)
// myFun()

// const myFun = function(){
//     console.log("hello world")
// }

// myFun()

// const myFun = () => {
//     console.log("hello world")
// }

// const add = (x,y) => x + y
// console.log(add(4,3));


// item = {
//     id:1,
//     title: "item 1",
//     description: "description 1"
// }
// drawItem(item)

// console.log(`
// id : ${item['id']}
// title: ${item.title}
// description: ${item.description}    
// `)
// const drawItem = ( data ) => {
//     console.log(`id: ${data.id} \ntitle: ${data.title} \ncompleted: ${data.completed}`)
// }
// items = [
//     {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 2,
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

// items.forEach(item => drawItem(item) )
// items.forEach(element => {
//     drawItem(element)
// });



// x = [{a:1, b:2}, {a:3, b:4}]
// x.forEach(z=>{console.log(z.a)})

// const students = ["stu 1", "stu 2", "stu 3", "stu 4","stu 5",]
// const ages = [10, 11,5, 6,7]
// const students = [
//     {name: "stu 1", age:10},
//     {name: "stu 2", age:11},
//     {name: "stu 3", age:12},
//     {name: "stu 4", age:8},
//     {name: "stu 5", age:5},
// ]
// students.forEach( (s) => 
//     console.log(`${ s.name } - ${ s.age }`) 
// )




// let id = prompt("enter item id")
// let title = prompt("enter item title")
// let description = prompt("enter item desc. ")


// let a = [1,5,10,15,2,6]
// a.pop()
// a.shift()
// a.unshift(9)
// a.push(9)
// console.log(a)
// let sum = 0
// a.forEach(item => sum += item)
// console.log(sum);

let a = [1,5,10,15,2,6]

let res = a.findIndex(item => {
    return item==10
})
console.log(res);







