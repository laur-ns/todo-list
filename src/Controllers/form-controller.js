import formView from "../Views/form-view";
import mainController from "./main-controller";
import projectController from "./project-controller";
import taskController from "./task-controller";

function setCssVariables(formType) {
  if (formType.toLowerCase() === 'add') {
    document.documentElement.style.setProperty('--main', '#70a011')
    document.documentElement.style.setProperty('--main', '#b2ff194b')
    document.documentElement.style.setProperty('--main', '#b2ff1934')
    document.documentElement.style.setProperty('--main', '#a9fa06')
  } else if ( formType.toLowerCase() === 'edit') {
  }
}

function submitNewTask(obj) {
  obj.project = projectController.getCurrentProject();
  taskController.create(obj);
  mainController.showAllTasks(obj.project);
  formView.hideForms();
  console.log(obj);
}

function getTodayDate() {
  const today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (today.getMonth() < 10) {
    month = `0${month}`;
  }
  if (today.getDate() < 10) {
    day = `0${today.getDate()}`;
  }
  return `${today.getFullYear()}-${month}-${day}`
}


const formController = {
  getTodayDate,
  setCssVariables,
  submitNewTask
}

export default formController;