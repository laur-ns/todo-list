import mainController from "../Controllers/main-controller";
import projectController from "../Controllers/project-controller";

function renderAddForm() {
  projectController.createProject(prompt('Insert project name'));
}

function renderProject(pName) {
  const projectList = document.querySelector('.project-list > ul');
  const project = document.createElement('li');
  project.textContent = pName;
  projectList.appendChild(project);
  setListener(project);
}

function setHighlight(pNode) {
  const projects = document.querySelectorAll('.project-list ul > *');
  projects.forEach(e => {
    // remove all highlights
    e.classList.remove('highlight');
  });
  const toHighlight = projectController.getCurrentProject();
  console.log(toHighlight);
  if (toHighlight === undefined) {
    const allTasks = document.querySelector('.all-tasks');
    allTasks.classList.add('highlight');
  }
  else if (pNode.textContent == toHighlight) {
    pNode.classList.add('highlight');
  }
  return;
}

function setListener(pNode) {
  const projectName = pNode.textContent;
  pNode.addEventListener('click', () => {
    projectController.setCurrentProject(projectName);
    setHighlight(pNode);
    mainController.showAllTasks(projectName);
  });
}

const projectView = {
  setListener,
  renderAddForm,
  renderProject,
  setHighlight,
}


export default projectView;