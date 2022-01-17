import { TaskFactory, taskList } from "../Models/task-list";
import view from "../Views/dom-manipulator";
import displayController from "./display-controller";

function createTask(obj) {
  let index = (taskList.push(TaskFactory(obj))) - 1;
  console.table(index);
  view.appendTask(taskList[index])
}

export default createTask;