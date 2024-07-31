/*
localstorage => []
push data get from user
get data from form
read data from storage
loop data in html index
*/
// let myData
// try{
//     myData = JSON.parse(localStorage.getItem("tasks")) || []
//     if(!Array.isArray(myData)) throw new Error("msh sa7 kda")
// }
// catch(e){ //error
//     console.log(e.message)
//     myData = []
// }
// console.log(myData)



const readFromStorage = ( keyName = "tasks") =>{
 let myData
 try{
  myData = JSON.parse(localStorage.getItem(keyName)) || []
  if(!Array.isArray(myData)) throw new Error("")
  }
  catch(e){ //error
   myData = []
  }
  return myData
}

const writeToStorage = (myData, keyName= "tasks") => localStorage.setItem(keyName, JSON.stringify(myData))

// let allTasks = readFromStorage()
// allTasks.push({id:1, title:"title",decr:"desc"})
// writeToStorage(allTasks)

// console.log(Date.now())
let addForm = document.querySelector("#addForm")
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    let newData = {
        id:Date.now(),
        title: addForm.elements.taskTitle.value,
        description: addForm.elements.taskDesc.value,
    }
    let allTasks = readFromStorage()
    allTasks.push(newData)
    writeToStorage(allTasks)
    // console.log(this.elements.taskTitle.value)
    addForm.reset()
})
