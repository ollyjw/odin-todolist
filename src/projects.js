import { grabProjectFormData } from './grabFormData.js';

export let projectsArray = [];

// Push new projects to projects array
export function addNewProjectToArray(newProject) {
    projectsArray.push(newProject)
}


// Factory function
export const createProject = (title, description) => {
    
    // addNewProjectToArray(newProject);
    return { projectsArray, title, description };
}