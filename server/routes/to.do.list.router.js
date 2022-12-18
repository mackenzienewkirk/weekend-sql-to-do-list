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

//Post route

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

//PUT route

toDoListRouter.put('/:id', (req,res) => {
console.log('req.params:', req.params);
console.log('req.body:', req.body);

    let idToUpdate = req.params.id;
    let newStatus = req.body.status;

    let sqlQuery = `
    UPDATE "toDoList"
    SET "status" = $1
    WHERE "id" = $2;
    `

let sqlValues = [newStatus, idToUpdate];

pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('something broke in PUT /toDoList:id', dbErr);
        res.sendStatus(500);
    })
})

//Delete route to delete a task

toDoListRouter.delete('/:id', (req,res) => {
    console.log(req.params);
    let idToDelete = req.params.id;

    let sqlQuery = `
    DELETE FROM "toDoList"
        WHERE "id" = $1;
        `
    let sqlValues = [idToDelete];
    pool.query(sqlQuery,sqlValues)
    .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('Everything broke oh my god in DELETE /toDoList/:id', dbErr);
        res.sendStatus(500);
    })
})


module.exports = toDoListRouter;