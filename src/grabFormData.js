import { createProject, addNewProjectToArray } from './projects.js';
import { displayProject, displayToDoItem } from './domController.js';
import { projectsArray  } from './projects.js';
import { addNewToDoToArray, createToDo, toDoArray } from './toDo.js';
import { parseISO, startOfToday } from 'date-fns';

// Project form
export function grabProjectFormData(event) {
    // submit input tries to send data to a server by default
    event.preventDefault();

    // store the value of each input in vars
    const projectTitleValue = document.getElementById("project-title").value;
    const projectDescriptionValue = document.getElementById("project-description").value;  

    let newProject = createProject(projectTitleValue, projectDescriptionValue);

    addNewProjectToArray(newProject);

    // Display function
    displayProject();
    console.log(projectsArray);
    
}

// To-do form
export function grabToDoFormData(event) {
    event.preventDefault();

    const toDoTitleValue = document.getElementById("to-do-title").value;
    const toDoDescriptionValue = document.getElementById("to-do-description").value;
    
    
    // the default parsed value is always formatted yyyy-mm-dd, date-fns's parse ISO changes it to dd-mm-yyyy
    const toDoDateValue = document.getElementById("dueDate").value;

    const toDoPriorityValue = document.getElementById("priority").value;

    let newToDo = createToDo(toDoTitleValue, toDoDescriptionValue, toDoDateValue, toDoPriorityValue, parentProject);

    addNewToDoToArray(newToDo);
    displayToDoItem();
    console.log(toDoArray);    

    // Add required fields
    if (toDoTitleValue == '' || toDoDescriptionValue == '' || toDoDateValue == '') {
        alert("Please fill out the title, description and due date fields");
    }

    // Warn user that they selected a date in past
    if (parseISO(toDoDateValue) < startOfToday()) {
        alert("You have entered a date which already passed!");
        console.log(parseISO(toDoDateValue));
        return;
    }

    return { toDoTitleValue, toDoDescriptionValue, toDoDateValue, toDoPriorityValue, }

}