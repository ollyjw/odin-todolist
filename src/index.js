import './style.css';
import { createToDo } from './toDo.js';
import { displayProject, displayToDoItem } from './domController.js';
import { createProject } from './projects.js';


// Project
// -- To do
// ---- View Details
// ---- Edit Details
// ---- Delete Details

// Need new project btn & choice of which projects the to do items are listed under
// Create new to-dos, set to-dos to complete, change to-do priority
// View all projects / View all todos in each project / expand todo to see/edit details

// Add projects to a side nav & the To Do's to cards in content container 

displayProject();
displayToDoItem();

// Assigning factory function to var and logging
const myToDo = createToDo('eat', 'eat ingredients straight out of the fridge', 'soon', 'high');
console.log(myToDo);


const myProject = createProject('lol', 'lmao');
console.log(myProject);


// date fns - import the function you want to use
const {format} = require('date-fns');
const today =format(new Date(),'dd.MM.yyyy');
console.log(today);