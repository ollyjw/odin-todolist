import { grabProjectFormData, grabToDoFormData } from './grabFormData';
import { Modal } from './modal';
import { Storage } from './storage.js';
import { format, parse } from 'date-fns';

const DisplayController = (() => {

    const sideNav = document.getElementById("projects");
    const toDoList = document.getElementById("to-do-list");

    // Create project html elements
    function printProjectInfo(project) {

        // Create project list item
        const projectLi = document.createElement('li');
        projectLi.classList.add('project');
        projectLi.dataset.index = project['id'];
        sideNav.appendChild(projectLi);

        // Create an anchor tag within the li
        const projectA = document.createElement('a');
        projectA.className = "project-link";
        projectA.href = '#';
        projectLi.appendChild(projectA);

        // Create a h2 tag for title
        const projectH2 = document.createElement("h2");
        projectH2.className = "project-title";
        projectH2.textContent = project['projectName'];

        // Create p tag for description
        const projectP = document.createElement("p");
        projectP.className = "project-description";
        projectP.textContent = project['description'];

        // Create delete project btn that brings up confirmation modal
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.classList.add('btn');
        deleteProjectBtn.setAttribute('type', 'button');
        deleteProjectBtn.textContent = 'Delete';
        deleteProjectBtn.id = project['id'];

        deleteProjectBtn.addEventListener('click', function () {
            const deleteConfirmModal = document.getElementById('delete-project-confirm-modal');
            Modal.openModal(deleteConfirmModal);
            addListenerToDelProj(project['id']);
        })

        // Add tags to list item
        projectA.appendChild(projectH2);
        projectA.appendChild(projectP);
        projectA.appendChild(deleteProjectBtn);

        addListenerToProjectItem(projectLi, project['projectName'], projectA, displayToDoItem);
    }

    // Read the ID of the delbtn & delete the corresponding proj
    function addListenerToDelProj(projectId) {
        const deleteProjectConfirmBtn = document.getElementById('delete-project-confirm');
        deleteProjectConfirmBtn.addEventListener('click', function () {
            deleteProject(projectId);
        })
    }

    function deleteProject(projectId) {
        Storage.deleteProject(projectId);

        // Clear todo container, display proj, display default todo, populate dropdown
        init();

        // Close delete modal (to be added on click delete confirm btn)
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
    }

    // Click on a project, reset todo container, display project's to-do, add active class to anchor
    function addListenerToProjectItem(projectElem, projectName, anchor, displayToDoItem) {
        projectElem.addEventListener('click', function () {
            resetToDoList();
            displayToDoItem(projectName);
            resetActiveProject(anchor);
        })
    }

    // to be added to click event:
    // add class of active to anchor tag & remove it from the other projects
    function resetActiveProject(newActiveProject) {
        let projectsUl = document.getElementById('projects').getElementsByClassName('active');

        for (let project of projectsUl) {
            project.classList.remove('active');
        }

        newActiveProject.classList.add('active');
    }

    function init() {
        // Clears project + to do containers
        resetDisplay();
        // Loop through projects array and display each project object's properties
        displayProject();
        // Display default to do on page load
        displayToDoItem('Default Project');
        // Populate the dropdown
        populateProjectDropdown('Default project');        
    }

    // Loop through array and populate html elements
    function displayProject() {
        // Set content div to empty so it clears the page each time you save & doesnt append projects to previous iteration of displayProject
        resetProjectList();

        // Loop through array and display each project's properties
        let projects = Storage.getProjectItems();

        projects.forEach((item) => {
            printProjectInfo(item);
        });
    }

    // Once new project submitted, add to dropdown in new to-do form
    // populateProjectDropdown('Default project');
    function populateProjectDropdown(projectName) {
        // Store Select tag of project dropdown
        const projectSelect = document.getElementById("projectName");

        // reset the list every time a project is added
        projectSelect.innerHTML = '';

        // REFACTOR AWAY FROM INITIAL ARRAYS TO LOCAL Storage ARRAYS
        let projects = Storage.getProjectItems();

        // Loop through projects array and populate in option tags
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i].projectName;
            let optionElement = document.createElement('option');
            optionElement.textContent = project;
            optionElement.value = project;
            projectSelect.appendChild(optionElement);
        }
    }

    // Create to-do html elements
    function printToDoInfo(title, description, dueDate, priority, id) {

        // Create card div
        const toDoCard = document.createElement('div');
        toDoCard.classList.add('to-do-card');
        toDoList.appendChild(toDoCard);
        toDoCard.id = id;

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
        let date = parse(dueDate, 'dd.MM.yyyy', new Date());

        toDoDateP.textContent = `Due Date: ${format(date, 'dd.MM.yyyy')}`;

        // Create p tag for priority
        const toDoPriority = document.createElement("p");
        toDoPriority.textContent = `Priority: ${priority}`;

        // Create Delete Btn which brings up delete confirmation modal
        const deleteToDoBtn = document.createElement('button');
        deleteToDoBtn.classList.add('btn');
        deleteToDoBtn.setAttribute('type', 'button');
        deleteToDoBtn.textContent = 'Delete';

        deleteToDoBtn.addEventListener('click', function () {
            const deleteConfirmModal = document.getElementById('delete-to-do-confirm-modal');
            Modal.openModal(deleteConfirmModal);
            addListenerToDelToDo(id);
        })

        // Add tags to card div
        toDoCard.appendChild(toDoH2);
        toDoCard.appendChild(toDoDescriptionP);
        toDoCard.appendChild(toDoDateP);
        toDoCard.appendChild(toDoPriority);
        toDoCard.appendChild(deleteToDoBtn);
    }

    // Read the ID of the delbtn & delete the corresponding todo
    function addListenerToDelToDo(toDoId) {
        const deleteToDoConfirmBtn = document.getElementById('delete-to-do-confirm');
        deleteToDoConfirmBtn.addEventListener('click', function () {
            deleteToDo(toDoId);
        })
    }

    function deleteToDo(toDoId) {
        Storage.deleteToDo(toDoId);

        // Clear todo container, display proj, display default todo, populate dropdown
        init();

        // Close delete modal (to be added on click delete confirm btn)
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
    }

    // Clear the to do list (when click on project so it hides other projects todos)
    function resetToDoList() {
        toDoList.innerHTML = '';
    }

    function resetProjectList() {
        sideNav.innerHTML = '';
    }

    function resetDisplay() {
        resetProjectList()
        resetToDoList();
    }

    // Loop through array and populate html elements
    function displayToDoItem(projectName) {
        let toDos = Storage.getToDosOfProject(projectName);

        toDos.forEach(toDo => {
            printToDoInfo(toDo['title'],
                toDo['description'], toDo['dueDate'], toDo['priority'], toDo['id']);
        })
    }

    ////////////////////////////////////////////

    // ///////////////////
    // FORM SUBMIT/CANCEl BTNS
    // ///////////////////
    const saveProjectBtn = document.getElementById("save-new-project");
    saveProjectBtn.addEventListener('click', grabProjectFormData);
    saveProjectBtn.addEventListener('click', populateProjectDropdown);

    saveProjectBtn.addEventListener('click', () => {
        const modals = document.querySelector('.modal.active')
        Modal.closeModal(modals);
    })

    const saveToDoBtn = document.getElementById("save-new-to-do");
    saveToDoBtn.addEventListener('click', grabToDoFormData);
    saveToDoBtn.addEventListener('click', init);

    // commented because currently if you dont fill out the fields you get the alert & the form closes
    // saveToDoBtn.addEventListener('click', () => {
    //     const modals = document.querySelector('.modal.active')
    //     Modal.closeModal(modals);
    // })


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

    contentContainer.prepend(newToDoBtn); contentContainer.prepend(newProjectBtn);


    // ///////////////////
    // CANCEL BTNS
    // ///////////////////
    const cancelDeleteProject = document.getElementById('delete-project-cancel');
    const cancelDeleteToDo = document.getElementById('delete-to-do-modal-cancel');
    const cancelNewProj = document.getElementById('cancel-new-project');
    const cancelNewToDo = document.getElementById('cancel-new-to-do');


    cancelDeleteProject.addEventListener('click', () => {
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
    })
    cancelDeleteToDo.addEventListener('click', () => {
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
    })
    cancelNewProj.addEventListener('click', () => {
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
    })
    cancelNewToDo.addEventListener('click', () => {
        const modals = document.querySelector('.modal.active');
        Modal.closeModal(modals);
    })

    return {
        printProjectInfo,
        addListenerToDelProj,
        deleteProject,
        resetActiveProject,
        addListenerToProjectItem,
        init,
        displayProject,
        populateProjectDropdown,
        printToDoInfo,
        addListenerToDelToDo,
        deleteToDo,
        resetToDoList,
        resetProjectList,
        resetDisplay,
        displayToDoItem
    }

})();

export { DisplayController };