$(document).ready(onReady);

function onReady() {
console.log('The onReady function');
    fetchAndRenderTasks();
    $('#addTaskButton').on('click', addTask);
    $('body').on('click', '.deleteButton', deleteTask);
    $('body').on('click', '.completeButton', completeTask);
}

function fetchAndRenderTasks() {
    $.ajax({
    method: 'GET',
    url: '/toDoList'
    }).then((response) => {
        $('#taskList').empty();
    for (let toDoList of response) {
        $('#taskList').append(`
        <li ${taskCompleted(toDoList)} data-id=${toDoList.id}>
            ${toDoList.task}, (${toDoList.notes}), is ${toDoList.status}
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        </li>
        `)
    }
    }).catch((error) => {
    console.log('something broke:', error);
    })
}

function addTask() {
    let newTask = $('#taskInput').val();
    let newNotes = $('#notesInput').val();
    let newStatus = $('#statusInput').val();

    let newTaskItem = {
        task: newTask,
        notes: newNotes,
        status: newStatus
    }

    $.ajax({
    method: 'POST',
    url: '/toDoList',
    data: newTaskItem
    }).then((response) => {
    fetchAndRenderTasks();
    }).catch((error) => {
    console.log('something broke in addTask():', error);
    })
}

//Need to check in on PUT ajax to connect server when adding an item

function deleteTask() {
    let idToDelete = $(this).parent().data().id;

    $.ajax({
    method: 'DELETE',
    url: `/toDoList/${idToDelete}`
    }).then((response) => {
    fetchAndRenderTasks();
    }).catch((error) => {
    console.log('deleteTask() big broke:', error);
    })
}

function completeTask() {
    let idToUpdate = $(this).parent().data().id;
    
    $.ajax({
    method: 'PUT',
    url: `/toDoList/${idToUpdate}`,
    data: {
        status: 'Done'
    }
    }).then((response) => {
    fetchAndRenderTasks();
    }).catch((error) => {
    console.log('something failed in completeTask():', error);
    })
}

function taskCompleted(toDoList) {
    if (toDoList.status === 'Done') {
        return 'class="completed"'
    }
    else {
        return ''
    }
}
