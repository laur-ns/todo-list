import mainView from "../Views/main";
import taskView from "../Views/task";
import { taskList } from "../Models/task";
import taskController from "./task";
import controls from "../Views/controls";

const mainController = (() => {
  function showAllTasks(project) {
    controls.resetFilters();
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

  return {
    showAllTasks,
  }
})();

export default mainController;