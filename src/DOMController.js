import { grabProjectFormData, grabToDoFormData } from './grabFormData';
import { projectsArray, updateIndex } from './projects.js';
import { toDoArray } from './toDo';


const sideNav = document.getElementById("projects");

const toDoList = document.getElementById("to-do-list");


export function printProjectInfo(title, description, id) {

    // Create project list item
    const projectLi = document.createElement('li');
    projectLi.classList.add('project');
    projectLi.dataset.index = id;
    sideNav.appendChild(projectLi);

    // Create a h2 tag for title
    const projectH2 = document.createElement("h2");
    projectH2.className = "project-title";
    projectH2.textContent = title;

    // Create p tag for description
    const projectP = document.createElement("p");
    projectP.className = "project-title";
    projectP.textContent = description;
    
    // Add tags to list item
    projectLi.appendChild(projectH2);
    projectLi.appendChild(projectP);
}


export function displayProject() {

    updateIndex();

    // Set content div to empty so it clears the page each time you save & doesnt append projects to previous iteration of displayProject
    // NB - this didnt work until I called the function in global scope in index.js & broke when I put it beneath the following forEach
    sideNav.innerHTML = '';
    
    // Loop through array and display each project's properties
    projectsArray.forEach(project => {
        // print title + description
        printProjectInfo(project.title, project.description, project.id);
    })    
}

export function printToDoInfo(title, description, dueDate, priority) {

    // Create card div
    const toDoCard = document.createElement('div');
    toDoCard.classList.add('to-do-card');
    toDoList.appendChild(toDoCard);

    // Create a h2 tag for title
    const toDoH2 = document.createElement("h2");
    toDoH2.className = "to-do-title";
    toDoH2.textContent = title;

    // Create p tag for description
    const toDoDescriptionP = document.createElement("p");
    toDoDescriptionP.className = "to-do-title";
    toDoDescriptionP.textContent = description;

    // Create p tag for date
    const toDoDateP = document.createElement("p");
    toDoDateP.className = "to-do-date";
    toDoDateP.textContent = `Due at ${dueDate}`;

    // Create p tag for priority
    const toDoPriority = document.createElement("p");
    toDoPriority.className = "to-do-priority";
    toDoPriority.textContent = `${priority} Priority`;
    
    // Add tags to card div
    toDoCard.appendChild(toDoH2);
    toDoCard.appendChild(toDoDescriptionP);
    toDoCard.appendChild(toDoDateP);
    toDoCard.appendChild(toDoPriority);
}

export function displayToDoItem() {
    // Unsure whether to put this in printinfo to append to projectLi
    // const projectItems = document.createElement('div');
    // projectItems.classList.add('project-items');

    toDoList.innerHTML = '';
    
    // Loop through array and display each project's properties
    toDoArray.forEach(toDo => {
        // print title + description
        printToDoInfo(toDo.title, toDo.description, toDo.dueDate, toDo.priority);
    })
}

const saveProjectBtn = document.getElementById("save-new-project");
saveProjectBtn.addEventListener('click', grabProjectFormData);

const saveToDoBtn = document.getElementById("save-new-to-do");
saveToDoBtn.addEventListener('click', grabToDoFormData);


// const cancelProjectBtn = document.getElementById("save-new-project");