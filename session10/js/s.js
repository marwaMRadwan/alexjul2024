const myList = []
const getData = () =>{
    let data = {
        id: prompt("id"),
        title:prompt("title"),
        desc: prompt("desc")
    }
    return data   
}
const addToMyList = () =>{
    let data = getData()
    myList.push(data)
}

// let d = getData()
// addToMyList()
// console.log(myList)


let ch
do{
    ch=prompt("choice")
    if(ch==1) addToMyList()
        else console.log("invalid")
}while(ch!=0)