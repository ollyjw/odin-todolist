import { grabProjectFormData, grabToDoFormData } from './grabFormData';
import { projectsArray, updateIndex } from './projects.js';
import { toDoArray } from './toDo';
import { parseISO } from 'date-fns';
import { Modal } from './modal';


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


// Once new project submitted, do this
export function populateProjectDropdown(){
    // Store Select tag of project dropdown
    const projectSelect = document.getElementById("projectName");
    
    // Loop through projects array and populate in option tags
    // THIS ARRAY IS AN OBJECT WITH MULTIPLE PROPERTIES - I NEED TO RETRIEVE PROJECTNAME PROP OR THE DROPDOWN OPTIONS WILL JUST SAY OBJECT
    for (let i = 0; i < projectsArray.length; i++) {
        let project = projectsArray[i];
        let optionElement = document.createElement('option');
        optionElement.textContent = project;
        optionElement.value = project;
        projectSelect.appendChild(optionElement);
    }
}

export function printToDoInfo(title, description, dueDate, priority) {

    // let title = localStorage.getItem('title');
    // let description = localStorage.getItem('description');
    // let dueDate = localStorage.getItem('dueDate');
    // let priority = localStorage.getItem('priority');

    
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
    toDoDescriptionP.textContent = `Description: ${description}`;

    // Create p tag for date
    const toDoDateP = document.createElement("p");
    toDoDateP.textContent = `Deadline: ${parseISO(dueDate)}`;

    // Create p tag for priority
    const toDoPriority = document.createElement("p");
    toDoPriority.textContent = `Priority: ${priority}`;
   
    // Add tags to card div
    toDoCard.appendChild(toDoH2);
    toDoCard.appendChild(toDoDescriptionP);
    toDoCard.appendChild(toDoDateP);
    toDoCard.appendChild(toDoPriority);
}

export function displayToDoItem() {
    toDoList.innerHTML = '';
    
    // Loop through array and display each project's properties
    toDoArray.forEach(toDo => {
        // print title, description, duedate, priority
        printToDoInfo(toDo.title, toDo.description, toDo.dueDate, toDo.priority);
    })
}


// ///////////////////
// FORM SUBMIT/CANCEl BTNS
// ///////////////////
const saveProjectBtn = document.getElementById("save-new-project");
saveProjectBtn.addEventListener('click', grabProjectFormData);
saveProjectBtn.addEventListener('click', populateProjectDropdown);

const saveToDoBtn = document.getElementById("save-new-to-do");
saveToDoBtn.addEventListener('click', grabToDoFormData);

// const cancelProjectBtn = document.getElementById("save-new-project");


// ///////////////////
// NEW PROJ/TO-DO BTNS
// ///////////////////
const contentContainer = document.getElementById('content-container');
const overlay = document.getElementById('overlay');

const newProjectBtn = document.createElement('button');
newProjectBtn.classList.add('btn');
newProjectBtn.setAttribute('type', 'button');
newProjectBtn.textContent = 'New project';

newProjectBtn.addEventListener('click', () => {
    const projectModal = document.getElementById('new-project');
    Modal.openModal(projectModal);
})
overlay.addEventListener('click', () => {
    const modals = document.querySelector('.modal.active')
    Modal.closeModal(modals);
})

const newToDoBtn = document.createElement('button');
newToDoBtn.classList.add('btn');
newToDoBtn.setAttribute('type', 'button');
newToDoBtn.textContent = 'New To Do';

newToDoBtn.addEventListener('click', () => {
    const toDoModal = document.getElementById('new-to-do');
    Modal.openModal(toDoModal);
})

contentContainer.appendChild(newProjectBtn);
contentContainer.appendChild(newToDoBtn);



// DELETE PROJ/TO-DO BTNS

// function createDeleteToDoBtn() {
//     const btn = document.createElement('button');
//     btn.classList.add('btn');
//     btn.setAttribute('type', 'button');

//     btn.addEventListener('click', function() {
//         Modal.openModal();
        
//     })
// }


// DETAILS BTN