import { TaskFactory, taskList } from "../Models/task-list";
import view from "../Views/dom-manipulator";
import displayController from "./display-controller";

function createTask(obj) {
  let index = (taskList.push(TaskFactory(obj))) - 1;
  view.appendTask(taskList[index])
  let taskNode = document.getElementById(`${taskList[index].id}`);
  displayController.setTaskListener(taskNode);
}

function deleteTask(id) {
  // scans array for Id, and deletes it
  const task = taskList.find(e => e.id === id)
  console.log(`deleting ${task.name}`)
}

const tasks = {
  createTask,
  deleteTask,
}

export default tasks;