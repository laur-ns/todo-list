import mainController from "../Controllers/main-controller";
import taskController from "../Controllers/task-controller";
import projectView from "./project-view";
import taskView from "./task-view";

function renderCompleteCount(count) {
  const element = document.querySelector('#completed > h2');
  element.textContent = `Completed (${count})`;
}

function setStaticListeners() {
  // sidebar
  const allTasks = document.querySelector('.all-tasks');
  const allProjectElements = document.querySelectorAll('.all-tasks ~ li');
  const addProject = document.getElementById('add-project');
  const today = document.getElementById('today');
  const nextWeek = document.getElementById('next-week');
  allTasks.addEventListener('click', taskController.showAllTasks); // taskController.showAllTasks
  allProjectElements.forEach((e) => {
    e.addEventListener('click', projectView.setListener.bind(null, e));
  });
  addProject.addEventListener('click', () => {
    projectView.renderAddForm();
  })
  today.addEventListener('click', () => {
    mainController.showTasksBetweenDates(/* today, tomorrow*/);
  });
  nextWeek.addEventListener('click', () => {
    mainController.showTasksBetweenDates(/* today, next week */);
  });

  // task list
  const addTask = document.getElementById('add-task');
  addTask.addEventListener('click', taskView.renderAddForm);
  
  // completed list
  const completedContainer = document.getElementById('completed');
  completedContainer.addEventListener('click', toggleDropdown);
}

function toggleDropdown() {
  console.log('toggling dropdown');
}

const mainView = {
  renderCompleteCount,
  setStaticListeners,
}

export default mainView;