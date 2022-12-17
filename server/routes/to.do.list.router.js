const { Router, application } = require('express');
const express = require('express');
const toDoListRouter = express.Router();


// DB CONNECTION

const pool = require('../modules/pool.js');

//Get route for toDoList table info

toDoListRouter.get('/', (req,res) => {
    let sqlQuery = `
      SELECT * FROM "toDoList" 
        ORDER BY "task" ASC;
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        console.log('No tasks here', dbErr);
        res.sendStatus(500);
    })
})

toDoListRouter.post('/', (req,res) => {
    let newTask = req.body;
    console.log(`Adding new task!`, newTask);

    let sqlQuery = `
    INSERT INTO "toDoList" ("task", "notes", "status")
        VALUES ($1,$2,$3);
    `;
    let sqlValues = [newTask.task, newNotes.notes, newStatus.status];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.log(`Error adding new task`, dbErr);
        res.sendStatus(500);
    })
})

module.exports = toDoListRouter;