var fs = require('fs')

// new     look
var command = process.argv[2]
var processLength = process.argv.length
var todoItem = ''

// fs module "file system"

if (command === "add") {
    console.log("-----creating new todo-----")

    // 3 because of the process.argv
    for(let i = 3; i < processLength; i++){
        todoItem += process.argv[i] + " "
    }
//if file dosent exist it will create a new onw or it will add to the existing one
    fs.appendFile("todo.txt", todoItem + " , ", err => {
        if (err) throw err
        console.log('succesfully saved!!!')
    })
} else if (command === "read") {
    console.log("------read all todo-----------")
    fs.readFile("todo.txt", 'utf8', (err, data) => {
        if (err) throw err
        // data is the return item will work for any return item/console
        //console.log(data)
        let todoArray = data.split(" , ")
        todoArray.splice(-1, 1)
        for(let i = 0; i < todoArray.length; i++) {
            console.log((i + 1) + ") " + todoArray[i])
        }
    })
    // "" write is over with nothing/empty string
} else if (command === "delete"){
   console.log("-----read all todo-----------")
   fs.writeFile("todo.txt", "", ()=>{
       console.log("delete sucess")
   })
}


