import mainView from "../Views/main-view";
import taskView from "../Views/task-view";
import { taskList } from "../Models/task-model";
import taskController from "./task-controller";

function showTasksBetweenDates() {
  console.log('showing tasks...');
}

function showAllTasks(project) {
  taskView.hideAllTasks();
  let tasksToRender = [];
  if (project === undefined) {
    // if no project specified, display all
    tasksToRender = taskList;
  } else {
    // find tasks in project
    taskList.forEach(a => {
      if (a.project === project) { tasksToRender.push(a) }
    });
  }
  tasksToRender.forEach(a => {
    taskView.renderTask(a);
  });
  const count = taskController.getCompletedCount();
  mainView.renderCompleteCount(count);
}

const mainController = {
  showTasksBetweenDates,
  showAllTasks,
}

export default mainController;