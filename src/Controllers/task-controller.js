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

const tasks = {
  create,
  remove,
  getIndexbyId,
}

export default tasks;