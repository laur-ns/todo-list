import projectList from '../Models/project-model';
import projectView from '../Views/project-view';

let currentProject = undefined;

function createProject(pName) {
  projectList.forEach(p => {
    if (pName === p.name) {
      alert('cannot make a new project of the same name!');
      return;
    }
  });
  projectList.push({ pName, tasks: [] });
  return pName;
}

function removeProject(pName) {
  const i = getIndex(pName);
  projectList.splice(i, 1);
}

function getProjectTasks(pName) {
  const i = getIndex(pName);
  return projectList[i];
}

function setCurrentProject(pName) {
  currentProject = pName;
}

function getCurrentProject() {
  return currentProject;
}

function addTask(id, pName) {
  if (getIndex(pName) === -1) {
    createProject(pName);
  }
  const i = getIndex(pName);
  projectList[i].tasks.push(id);
}

function removeTask(id, pName) {
  const i = getIndex(pName);
  const indexOfTask = projectList[i].tasks.findIndex(a => id === a);
  projectList[i].splice(indexOfTask, 1);
}

function showAllProjects() {
  const highlight = getCurrentProject();
  for(let i = 0; i < projectList.length; i++) {
    projectView.renderProject(projectList[i].name, highlight);
  }
}

// -- private functions -- //
function getIndex(name) {
  return projectList.findIndex(a => a.name === name);
}


const projectController = {
  createProject,
  removeProject,
  getProjectTasks,
  setCurrentProject,
  showAllProjects,
  getCurrentProject,
  removeTask,
  addTask,
}

export default projectController;