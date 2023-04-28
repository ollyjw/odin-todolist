import { grabProjectFormData, grabToDoFormData } from './grabFormData';
import { projectsArray, updateIndex } from './projects.js';
import { toDoArray } from './toDo';
import { Modal } from './modal';
import { getToDoData } from './storage';


const sideNav = document.getElementById("projects");
const toDoList = document.getElementById("to-do-list");

// Create project html elements
export function printProjectInfo(title, description) {

    // Create project list item
    const projectLi = document.createElement('li');
    projectLi.classList.add('project');
    // projectLi.dataset.index = id;
    sideNav.appendChild(projectLi);

    // Create a h2 tag for title
    const projectH2 = document.createElement("h2");
    projectH2.className = "project-title";
    projectH2.textContent = title;

    // Create p tag for description
    const projectP = document.createElement("p");
    projectP.className = "project-description";
    projectP.textContent = description;

    // Create delete project btn that brings up confirmation modal
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('btn');
    deleteProjectBtn.setAttribute('type', 'button');
    deleteProjectBtn.textContent = 'Delete';
        
    deleteProjectBtn.addEventListener('click', function() {
        const deleteConfirmModal = document.getElementById('delete-project-confirm-modal');
        Modal.openModal(deleteConfirmModal);
    })

    // DELETE PROJECT CONFIRMATION - currently deletes all
    const deleteProjectConfirmBtn = document.getElementById('delete-project-confirm');

    deleteProjectConfirmBtn.addEventListener('click', function deleteProject() {
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
        
        projectLi.remove();
        localStorage.clear();
    })
   
    // Add tags to list item
    projectLi.appendChild(projectH2);
    projectLi.appendChild(projectP);
    projectLi.appendChild(deleteProjectBtn);
}

// Loop through array and populate html elements
export function displayProject() {

    updateIndex();

    // Set content div to empty so it clears the page each time you save & doesnt append projects to previous iteration of displayProject
    // NB - this didnt work until I called the function in global scope in index.js & broke when I put it beneath the following forEach
    sideNav.innerHTML = '';
    
    // Loop through array and display each project's properties
    projectsArray.forEach(project => {
        // print title + description
        printProjectInfo(project.title, project.description);
    })    
}


// Once new project submitted, add to dropdown in new to-do form
export function populateProjectDropdown(){
    // Store Select tag of project dropdown
    const projectSelect = document.getElementById("projectName");

    projectSelect.innerHTML = '';
    
    // Loop through projects array and populate in option tags
     for (let i = 0; i < projectsArray.length; i++) {
        let project = projectsArray[i].title;
        let optionElement = document.createElement('option');
        optionElement.textContent = project;
        optionElement.value = project;
        projectSelect.appendChild(optionElement);
    }
}

// Create to-do html elements
export function printToDoInfo(title, description, dueDate, priority) {

    // title = localStorage.getItem('title');
    // description = localStorage.getItem('description');
    // dueDate = localStorage.getItem('dueDate');
    // priority = localStorage.getItem('priority');

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
    // the default parsed value is always formatted yyyy-mm-dd, date-fns changes it to dd-mm-yyyy
    const {format} = require('date-fns');
    toDoDateP.textContent = `Due Date: ${format(new Date(dueDate), 'dd.MM.yyy')}`;

    // Create p tag for priority
    const toDoPriority = document.createElement("p");
    toDoPriority.textContent = `Priority: ${priority}`;

    // Create Delete Btn which brings up delete confirmation modal
    const deleteToDoBtn = document.createElement('button');
    deleteToDoBtn.classList.add('btn');
    deleteToDoBtn.setAttribute('type', 'button');
    deleteToDoBtn.textContent = 'Delete';
        
    deleteToDoBtn.addEventListener('click', function() {
        const deleteConfirmModal = document.getElementById('delete-to-do-confirm-modal');
        Modal.openModal(deleteConfirmModal);
    })

    // DELETE TO DO CONFIRMATION
    const deleteToDoConfirmBtn = document.getElementById('delete-to-do-confirm');

    deleteToDoConfirmBtn.addEventListener('click', function deleteToDo() {
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);

        toDoCard.remove();
        localStorage.clear();
    })

   
    // Add tags to card div
    toDoCard.appendChild(toDoH2);
    toDoCard.appendChild(toDoDescriptionP);
    toDoCard.appendChild(toDoDateP);
    toDoCard.appendChild(toDoPriority);
    toDoCard.appendChild(deleteToDoBtn);
}

// Loop through array and populate html elements
export function displayToDoItem() {
    toDoList.innerHTML = '';
    
    // getToDoData();

    let title = localStorage.getItem('title');
    let description = localStorage.getItem('description');
    let dueDate = localStorage.getItem('dueDate');
    let priority = localStorage.getItem('priority');


    for (let toDo in toDoArray) {
        printToDoInfo(title, description, dueDate, priority);
    }

    // toDoArray.forEach(toDo => {
    //     // print title, description, duedate, priority
    //     printToDoInfo(toDo.title, toDo.description, toDo.dueDate, toDo.priority);
    // })

}

///////////////////////////////////////////////

// ///////////////////
// FORM SUBMIT/CANCEl BTNS
// ///////////////////
const saveProjectBtn = document.getElementById("save-new-project");
saveProjectBtn.addEventListener('click', grabProjectFormData);
saveProjectBtn.addEventListener('click', populateProjectDropdown);

const saveToDoBtn = document.getElementById("save-new-to-do");
saveToDoBtn.addEventListener('click', grabToDoFormData);

// Clear form and close modal
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

// ///////////////////
// CANCEL BTNS
// ///////////////////
const cancelDeleteProject = document.getElementById('delete-project-cancel');
const cancelDeleteToDo = document.getElementById('delete-to-do-modal-cancel');

cancelDeleteProject.addEventListener('click', () => {
    const modals = document.querySelector('.modal.active')
    Modal.closeModal(modals);
})
cancelDeleteToDo.addEventListener('click', () => {
    const modals = document.querySelector('.modal.active')
    Modal.closeModal(modals);
})

// DETAILS BTN