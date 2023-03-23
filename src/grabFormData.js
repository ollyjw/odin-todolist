import { createProject, addNewProjectToArray } from './projects.js';
import { displayProject } from './DOMController.js';

// Project form
export function grabProjectFormData(event) {
    // submit input tries to send data to a server by default
    event.preventDefault();

    // store the value of the title & descriptions inputs in vars
    const projectTitleValue = document.getElementById("project-title").value;
    const projectDescriptionValue = document.getElementById("project-description").value;  

    let newProject = createProject(projectTitleValue, projectDescriptionValue);

    addNewProjectToArray(newProject);

    // Display function
    displayProject();
}

// To-do form
// export function grabToDoFormData(event) {
   
// }