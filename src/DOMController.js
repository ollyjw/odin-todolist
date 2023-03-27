import { grabProjectFormData } from "./grabFormData";
import { projectsArray } from "./projects.js";



const content = document.getElementById("content");


export function printProjectInfo(title, description) {

    // Create card div
    const newDiv = document.createElement('div');
    newDiv.classList.add('project-card');
    content.appendChild(newDiv);

    // Create a h2 tag for title
    const projectH2 = document.createElement("h2");
    projectH2.className = "project-title";
    projectH2.textContent = title;

    // Create p tag for description
    const projectP = document.createElement("p");
    projectP.className = "project-title";
    projectP.textContent = description;
    
    // Add tags to card div
    newDiv.appendChild(projectH2);
    newDiv.appendChild(projectP);
}


export function displayProject() {
    // Loop through array and display each project's properties
    projectsArray.forEach(project => {
        // print title + description
        printProjectInfo(project.title, project.description);
    })
    
    // Set content div to empty so it doesnt append projects to previous iteration of displayProject
    // NB - this didnt work until I called the function in index.js
    content.innerHTML = '';    
}

export function displayToDoItem() {

}


const saveProjectBtn = document.getElementById("save-new-project");
saveProjectBtn.addEventListener('click', grabProjectFormData);
