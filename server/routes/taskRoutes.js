var express = require('express');
const app = express();

app.get('/tasks/all',(req, res)=>{
    res.status(200).json('All tasks in the database');
});

//Get all tasks in the databse
app.get('/tasks/:id', (req,res)=>{
    res.status(200).json(`Task with id:${req.params.id} `);
});

app.delete('/tasks/:id', (req,res)=>{
    res.status(202).json(`Deleted task with id:${req.params.id} `);
});

app.put('/tasks/:id', (req,res)=>{
    res.status(202).json(`updated task with id:${req.params.id} `);
});

module.exports = app;