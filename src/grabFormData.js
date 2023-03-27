import { createProject, addNewProjectToArray } from './projects.js';
import { displayProject } from './DOMController.js';
import { projectsArray  } from './projects.js';

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
// export function grabToDoFormData(event) {
   
// }