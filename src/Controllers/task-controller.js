import {taskList, TaskFactory} from "../Models/task-model";
import projectController from "./project-controller";
import taskView from "../Views/task-view";
import mainView from "../Views/main-view";

function create(obj) {
  let index = (taskList.push(TaskFactory(obj))) - 1;
  taskView.renderTask(taskList[index])
}

function remove(id) {
  const index = getIndexbyId(id);
  taskView.hideTask(id);
  taskList.splice(index, 1);
  mainView.renderCompleteCount(getCompletedCount());
}

function getIndexbyId(id) {
  const index = taskList.findIndex(e => e.id === id);
  return index;
}

function getCompletedCount() {
  let numCompleted = 0
  const currentProject = projectController.getCurrentProject();
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

function toggleComplete(id) {
  let index = getIndexbyId(id);
  if (!taskList[index].isComplete) {
    taskList[index].isComplete = true;
  } else {
    taskList[index].isComplete = false;
  }
  taskView.hideTask(id);
  taskView.renderTask(taskList[index])
  mainView.renderCompleteCount(getCompletedCount());
}

function showAllTasks(project) {
  let tasksToRender = [];
  if (project === undefined) { // if no project specified, display all
    tasksToRender = taskList;
  }
  else { // find tasks in project
    taskList.forEach(a => {
      if (a.project === project) { tasksToRender.push(a) }
    });
  }
  tasksToRender.forEach(a => {
    taskView.renderTask(a);
  });
  const count = getCompletedCount();
  mainView.renderCompleteCount(count);
}

const taskController = {
  create,
  remove,
  getIndexbyId,
  toggleComplete,
  showAllTasks,
  getCompletedCount,
}

export default taskController;