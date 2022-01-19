import projectController from "../Controllers/project-controller";

function renderAddForm() {
  const pName = projectController.createProject(prompt('Insert project name'));
  renderProject(pName);
}

function renderProject(pName, highlight) {
  const projectList = document.querySelector('.project-list > ul');
  const allTasks = document.querySelector('.all-tasks');
  const project = document.createElement('li');
  project.textContent = pName;
  if (highlight === undefined) {
    // if no highlight specified, highlight all-tasks
    allTasks.classList.add('highlight');
  }
  if (pName === highlight) {
    project.classList.add('highlight');
  }
  projectList.appendChild(project);
}

function setListener(pNode) {
  console.log(pNode);
}

const projectView = {
  setListener,
  renderAddForm,
  renderProject,
}


export default projectView;