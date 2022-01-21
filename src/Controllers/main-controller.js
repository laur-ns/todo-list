import mainView from "../Views/main-view";
import taskView from "../Views/task-view";
import { taskList } from "../Models/task-model";
import taskController from "./task-controller";

function showAllTasks(project) {
  taskView.hideAllTasks();
  taskView.showAddButton();
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
  showAllTasks,
}

export default mainController;