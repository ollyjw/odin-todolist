import './style.css';
import { blankToDoLoad } from './toDo.js';
import { displayProject, displayToDoItem } from './domController.js';
import { blankProjectLoad } from './projects.js';


// Project
// -- To do
// ---- View Details
// ---- Edit Details
// ---- Delete Details

// Need new project btn & choice of which projects the to do items are listed under
// Create new to-dos, set to-dos to complete, change to-do priority
// View all projects / View all todos in each project / expand todo to see/edit details

// Add projects to a side nav & the To Do's to cards in to do container 

// Assign to-dos to each project - add dropdown to to-do form that contains existing projects - may need to sort out storage first to achieve this

// Add projectsArray items to the select>options dropdown elements in the to-do form

// Possibly use Array.filter() to grab the projectName property out of the to-do factory & check if it's equal to item of project array?

//Click on a project in the sidenav and it shows the to-dos for that specific project

// Modal js - separate modals for each form - add/remove 'active' class to hide reveal upon click of add new to do / new project btns

// Storage - figure out local storage so its remembers the projects you added in the past & loads them on page load

blankProjectLoad();
blankToDoLoad();
displayProject();
displayToDoItem();


// date fns - import the function you want to use
const {format} = require('date-fns');
const today =format(new Date(),'dd.MM.yyyy');
console.log(today);