import { Project } from './projects.js';
import { DisplayController } from './domController.js';
import { ToDo } from './toDo.js';
import { parseISO, startOfToday } from 'date-fns';

// Project form
export function grabProjectFormData(event) {
    // submit input tries to send data to a server by default
    event.preventDefault();

    // store the value of each input in vars
    const projectTitleValue = document.getElementById("project-title").value;
    const projectDescriptionValue = document.getElementById("project-description").value;  

    // Create new project with these values
    Project.createProject(projectTitleValue, projectDescriptionValue);

    // Display function
    DisplayController.displayProject();
}

// To-do form
export function grabToDoFormData(event) {
    event.preventDefault();

    // Store the input values in a variable
    const toDoTitleValue = document.getElementById("to-do-title").value;
    const toDoDescriptionValue = document.getElementById("to-do-description").value;
    const toDoDateValue = document.getElementById("dueDate").value;
    const toDoPriorityValue = document.getElementById("priority").value;

    const projectNameValue = document.getElementById("projectName").value;

    // Add required fields
    if (toDoTitleValue == '' || toDoDescriptionValue == '' || toDoDateValue == '') {
        alert("Please fill out the title, description and due date fields");
    }

    // the default parsed value is always formatted yyyy-mm-dd, date-fns's parse ISO changes it to dd-mm-yyyy
    // Warn user that they selected a date in past
    if (parseISO(toDoDateValue) < startOfToday()) {
        alert("You have entered a date which already passed!");
        return;
    }

    const {format} = require('date-fns');
    const formattedDate = format(new Date(toDoDateValue),'dd.MM.yyyy');

    // Create new to-do object with properties from input values
    ToDo.createToDo(toDoTitleValue, toDoDescriptionValue, formattedDate, toDoPriorityValue, projectNameValue);

    // Push to DOM (Loops through array of to do items and populates html elements)
    DisplayController.displayToDoItem(projectName);
}