import { createProject, addNewProjectToArray } from './projects.js';
import { displayProject, displayToDoItem } from './domController.js';
import { projectsArray  } from './projects.js';
import { addNewToDoToArray, createToDo, toDoArray } from './toDo.js';

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
    
    
    // the parsed value is always formatted yyyy-mm-dd
    const toDoDateValue = document.getElementById("dueDate").valueAsDate;


    const toDoPriorityValue = document.getElementById("priority").value;

    let newToDo = createToDo(toDoTitleValue, toDoDescriptionValue, toDoDateValue, toDoPriorityValue);

    addNewToDoToArray(newToDo);

    displayToDoItem();
    console.log(toDoArray);    
}