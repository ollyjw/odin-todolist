export let projectsArray = [];

// Push new projects to projects array
export function addNewProjectToArray(newProject) {
    projectsArray.push(newProject)
}

// Factory function
export const createProject = (title, description) => {    
    return { title, description };
}