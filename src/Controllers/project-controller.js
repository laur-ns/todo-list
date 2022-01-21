import projectList from '../Models/project-model';
import projectView from '../Views/project-view';

let currentProject = undefined;
const projectController = (() => {

  function createProject(pName) {
    const badName = false;
    projectList.forEach(p => {
      if (pName === p.name) {
        alert(`${pName} already exists!`);
        badName = true;
      }
    });
    if (badName) { return };
    projectList.push({ name: pName, tasks: [] });
    projectView.renderProject(pName);
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
      return;
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
    for(let i = 0; i < projectList.length; i++) {
      projectView.renderProject(projectList[i].name);
    }
    projectView.setHighlight(undefined);
  }

  // -- private functions -- //
  function getIndex(name) {
    return projectList.findIndex(a => a.name === name);
  }

  return {
    createProject,
    removeProject,
    getProjectTasks,
    setCurrentProject,
    showAllProjects,
    getCurrentProject,
    removeTask,
    addTask,
  }
})();

export default projectController;