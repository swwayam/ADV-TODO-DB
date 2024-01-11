// Imports
const express = require('express')
const mongoose = require('mongoose')


// Server Base setup
const app = express()
const PORT = 4000
let db;
// Letting our application know about the format
app.use(express.json())

// npm init -y
// npm i express mongoose

// A todo app's backend

// DB - MongoDB is easy to use.
// Mongoose -> it provides us with inbuilt functions to do Database operations.

// {
//     name: "Arinayu",
//     mobile: 909010991
// }


// Steps of setting your db
// 0. Connect to DB
// 1. Define your schema (Structure) -> {name : string, mobile: number}
// 2. This data that we are sending is json format. {[], {}}
// 3. To make our nodejs aware of this format. we need to use the Json format in our applitcation
// 4. Setup appropriate routes so to send receive data.
// 5. For step 0, 1 and 4 we will be using mongoose to make our easier with inbuilt functions

// Mongo url -> mongodb+srv://swayam:=@cluster0.drmecaq.mongodb.net/?retryWrites=true&w=majority

// Connect to our online mongodb database
mongoose.connect('mongodb+srv://swayam:11223344=@cluster0.drmecaq.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("DB Connection Sucessfull");
    db = mongoose.connection
}).catch(err => {
    console.log(err);
})

// Define our schema / structure for DB 
const TodoSchema = new mongoose.Schema({
    todo: String,
    id: String,
})

// Create a model for your schema -> Todo inside {todo: String, id: String}
const Todo = mongoose.model('Todo', TodoSchema)


// If you have confidential or sensitive data use a post method
// Adding an item in DB
app.post('/v1/todo/add', async (req,res) => {
    try{
        await Todo.create(req.body)
        console.log(req.body);
        res.send("Data added sucess")
    }catch(err){
        console.log(err);
        res.send("error")

    }
})


// Get All The Items from DB
app.post('v1/todo/all', async (req, res) => {
    try{
        const todo = await Todo.find()
        res.json(todo)
    }catch(err){
        res.json({error: err})
    }
})


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})