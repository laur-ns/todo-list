import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import formView from "../Views/form-view";
import mainController from "./main-controller";
import projectController from "./project-controller";
import taskController from "./task-controller";

const formController = (() => {
  function setCssVariables(formType) {
    if (formType.toLowerCase() === 'add') {
      document.documentElement.style.setProperty('--main', '#70a011')
      document.documentElement.style.setProperty('--hover', '#b2ff194b')
      document.documentElement.style.setProperty('--border', '#b2ff1934')
      document.documentElement.style.setProperty('--bright', '#a9fa06')
    } else if ( formType.toLowerCase() === 'edit') {
      document.documentElement.style.setProperty('--main', '#05afc2')
      document.documentElement.style.setProperty('--hover', '#15aabb3b')
      document.documentElement.style.setProperty('--border', '#05afc223')
      document.documentElement.style.setProperty('--bright', '#44ecff')
    }
  }

  function submitNewTask(obj) {
    obj.project = projectController.getCurrentProject();
    taskController.create(obj);
    mainController.showAllTasks(obj.project);
    formView.hideForms();
  }

  function submitEditTask(obj) {
    taskController.edit(obj);
    mainController.showAllTasks(projectController.getCurrentProject());
    formView.hideForms();
  }

  function formatDate(date) {
    if (date == '') {
      return '';
    }
    return format(parseISO(date), 'P');
  }

  return {
    setCssVariables,
    submitNewTask,
    submitEditTask,
    formatDate,
  }
})();

export default formController;