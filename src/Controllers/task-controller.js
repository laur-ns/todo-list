import { TaskFactory, taskList } from "../Models/task-list";
import view from "../Views/dom-manipulator";
import displayController from "./display-controller";

function create(obj) {
  let index = (taskList.push(TaskFactory(obj))) - 1;
  view.appendTask(taskList[index])
  let taskNode = document.getElementById(`${taskList[index].id}`);
  displayController.setTaskListener(taskNode);
}

function remove(id) {
  const index = getIndexbyId;
  view.hideTask(id);
  taskList.splice(index, 1);
}

function getIndexbyId(id) {
  const index = taskList.findIndex(e => e.id === id);
  return index;
}

function getCompletedNumber(project) {
  let numCompleted = 0
  if (project === undefined) {
    taskList.forEach(a => {
      if (a.isComplete) { numCompleted++ }
    });
  }
  taskList.forEach(a => {
    if (a.isComplete && a.project === project) { numCompleted++ }
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
      view.appendCompletedTask(a)
      return;
    }
    view.appendTask(a);
  });
  const completedCount = getCompletedNumber(project);
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