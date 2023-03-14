

const content = document.getElementById("content");

export function addProject() {
    // store the value of the title input in a var & add it to html textcontent
    const projectTitle = document.getElementById("project-title").value;
    const h2 = document.createElement("h2");
    const saveProjectBtn = document.getElementById("save-new-project");
    h2.className = "project-title";
    h2.textContent = projectTitle;
    
    saveProjectBtn.addEventListener('click', grabFormData);

    content.appendChild(h2);

}

export function addToDoItem() {

}