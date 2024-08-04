const addForm = document.querySelector("#addForm")
const allData = document.querySelector("#allData")

const readFromStorage = ( keyName = "tasks") =>{
 let myData
 try{
  myData = JSON.parse(localStorage.getItem(keyName)) || []
  if(!Array.isArray(myData)) throw new Error("")
  }
  catch(e){
   myData = []
  }
  return myData
}

const writeToStorage = (myData, keyName= "tasks") => localStorage.setItem(keyName, JSON.stringify(myData))

const taskGenerator = (formData) =>{
    let newData = {
        id:Date.now(),
        title: formData.taskTitle.value,
        description: formData.taskDesc.value,
    }
    return newData
}
const generateMyEle = (parent, ele, txt, classList, ref) =>{
    let myele = document.createElement(ele)
    parent.appendChild(myele)
    if(txt) myele.textContent = txt
    if(classList) myele.classList = classList
    if(ref) myele.href = ref
    return myele
}

const drawAllTasks = (tasksArray) => {
    allData.innerHTML=""
    if(!tasksArray.length){
        generateMyEle(allData, "div", "no data to show", "alert alert-danger", null)
        return
    }
    tasksArray.forEach(task=>{
        let tr = generateMyEle(allData, "tr", null);
        generateMyEle(tr, "th", task.id)
        generateMyEle(tr, "td", task.title);generateMyEle(tr, "td", task.description)
        let td = generateMyEle(tr, "td", null)
        generateMyEle(td, "a", "show", "btn btn-success me-3", `single.html?id=${task.id}`)
        generateMyEle(td, "a", "edit", "btn btn-warning me-3", `edit.html?id=${task.id}`)
        let delBtn = generateMyEle(td, "button", "delete", "btn btn-danger")
        delBtn.addEventListener("click", function(e){
            // console.log(task.id)
            tasksArray = tasksArray.filter(t=>{
                return t.id != task.id
            })
            writeToStorage(tasksArray)
            // console.log(tasksArray)
            // tr.remove()
            drawAllTasks(tasksArray)
        })
    })
}

if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        let newData = taskGenerator(addForm.elements)
        let allTasks = readFromStorage()
        allTasks.push(newData)
        writeToStorage(allTasks)
        addForm.reset()
        window.location.href="index.html"
    })    
}
if(allData){
    let allTasks = readFromStorage()
    drawAllTasks(allTasks)
}
// if(allData){
//     let allTasks = readFromStorage()
//     allTasks.forEach(task=>{
//         // let x = `<tr>
//         //     <th scope="row">${task.id}</th>
//         //     <td>${task.title}</td>
//         //     <td>${task.description}</td>
//         //     <td>
//         //       <a href="single.html?id=${task.id}" class="btn btn-success me-2">Show</a>
//         //       <a href="edit.html?id=${task.id}" class="btn btn-warning  me-2">Edit</a>
//         //       <button class="btn btn-danger">Delete</button>
//         //     </td>
//         //   </tr>`
//         //   console.log(x)
//         //   allData.innerHTML += x
//         let tr = document.createElement("tr")
//         allData.appendChild(tr)
//         let td = document.createElement("td")
//         td.innerText= task.id
//         tr.appendChild(td)
//         td = document.createElement("td")
//         td.innerText= task.title
//         tr.appendChild(td)
//         td = document.createElement("td")
//         td.innerText= task.description
//         tr.appendChild(td)
//         td = document.createElement("td")

//         let showBtn = document.createElement("a")
//         showBtn.innerText = "show"
//         showBtn.setAttribute("class", "btn btn-success me-2")
        
//         showBtn.setAttribute("href", `single.html?id=${task.id}`)
//         let editBtn = document.createElement("a")
//         editBtn.innerText = "Edit"
//         editBtn.setAttribute("class", "btn btn-warning me-2")
        
//         editBtn.setAttribute("href", `edit.html?id=${task.id}`)

//         let delBtn = document.createElement("button")
//         delBtn.innerText="Delete"
//         delBtn.setAttribute("class", "btn btn-danger")
//         delBtn.addEventListener("click", function(){
//             console.log(task.id)
//         })

//         td.appendChild(showBtn)
//         td.appendChild(editBtn)
//         td.appendChild(delBtn)
//         tr.appendChild(td)

//     })
// }