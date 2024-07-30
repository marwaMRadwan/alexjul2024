const todos = []
const drawItems = () =>{
    todos.forEach(item=> {
        console.log(`id: ${item.id}`)
    })
}

const getItemDataFromUser = () =>{
    const item = {
        id: prompt("enter item id"),
        title: prompt("enter item title"),
        description:prompt("enter item desc. ")
    }
    return item    
    // todos.push(item)
}

const addItemToList= (item)=>{
    todos.push(item)
} 
let ch
do{
    ch = prompt(`1-add item \n 2-edit item \n 3- show all \n 4- delete item \n press 0 to exit `)
    console.log(ch)
    console.log(!0)
    console.log(!ch)
    switch(ch){
        case "0": 
        case null:
        break;
        case "1": 
            let myItem = getItemDataFromUser(); 
            addItemToList(myItem)
            break;
        case "2": alert("edit"); break;
        case "3": 
        drawItems()
        
        break;
        case "4": alert("delete"); break;
        default: alert("invalid number")
    }
}
while( ch!=0 && ch!=null )
