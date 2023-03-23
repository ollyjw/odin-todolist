import { grabProjectFormData } from "./grabFormData";
import { projectsArray, createProject } from "./projects.js";



const content = document.getElementById("content");


export function printProjectInfo(title, description) {


    const newDiv = document.createElement('div');
    newDiv.classList.add('project-card');
    content.appendChild(newDiv);

    const projectH2 = document.createElement("h2");
    projectH2.className = "project-title";
    projectH2.textContent = title;

    const projectP = document.createElement("p");
    projectP.className = "project-title";
    projectP.textContent = description;
    

    newDiv.appendChild(projectH2);
    newDiv.appendChild(projectP);
}

export function displayProject() {
    // const { projectsArray } = createProject();

    // Loop through array and display each project's properties
    projectsArray.forEach(project => {
        // print title
        printProjectInfo(project.title, project.description);
    })


}

export function displayToDoItem() {

}


const saveProjectBtn = document.getElementById("save-new-project");
saveProjectBtn.addEventListener('click', grabProjectFormData);
