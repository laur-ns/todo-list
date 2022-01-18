import { TaskFactory, taskList } from "../Models/task-list";
import view from "../Views/dom-manipulator";
import displayController from "./display-controller";
import projects from "../Models/project-list";

function create(obj) {
  let index = (taskList.push(TaskFactory(obj))) - 1;
  view.appendTask(taskList[index])
}

function remove(id) {
  const index = getIndexbyId(id);
  view.hideTask(id);
  taskList.splice(index, 1);
  view.updateCompletedCount(tasks.getCompletedNumber());
  // const updatedTasks = document.querySelectorAll('#task-list > *:not(#add-task), #completed-dropdown > *');
  // updatedTasks.forEach((e) => {
  //   displayController.setTaskListener(e);
  // });
}

function getIndexbyId(id) {
  const index = taskList.findIndex(e => e.id === id);
  return index;
}

function getCompletedNumber() {
  let numCompleted = 0
  const currentProject = projects.getCurrentProject();
  if (currentProject === undefined) {
    taskList.forEach(a => {
      if (a.isComplete) { numCompleted++ }
    });
  }
  taskList.forEach(a => {
    if (a.isComplete && a.project === currentProject) { numCompleted++ }
  });
  return numCompleted;
}

function showAllTasks(project) {
  let allTasks = [];
  if (project === undefined) { // if no project specified, display all
    allTasks = taskList;
  }
  else { // find tasks for each project
    taskList.forEach(a => {
      if (a.project === project) { allTasks.push(a) }
    });
  }
  allTasks.forEach(a => {
    if (a.isComplete) {
      view.appendCompletedTask(a);
      return;
    }
    view.appendTask(a);
  });
  const completedCount = getCompletedNumber();
  view.updateCompletedCount(completedCount);
}

const tasks = {
  create,
  remove,
  getIndexbyId,
  showAllTasks,
  getCompletedNumber,
}

export default tasks;