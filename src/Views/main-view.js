import { add } from "date-fns";
import parseISO from "date-fns/parseISO";
import dateController from "../Controllers/date-controller";
import mainController from "../Controllers/main-controller";
import projectController from "../Controllers/project-controller";
import formView from "./form-view";
import projectView from "./project-view";

function renderCompleteCount(count) {
  const element = document.querySelector('#completed > h2');
  element.textContent = `Completed (${count})`;
}

function setStaticListeners() {
  // sidebar
  const allTasks = document.querySelector('.all-tasks');
  const addProject = document.getElementById('add-project');
  const today = document.getElementById('today');
  const thisWeek = document.getElementById('this-week');
  allTasks.addEventListener('click', () => {
    projectController.setCurrentProject(undefined);
    projectView.setHighlight(allTasks);
    projectView.setHeader(allTasks.textContent);
    mainController.showAllTasks(undefined)
  });
  window.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      if (document.activeElement === addProject &&
          addProject.value !== '') {
        projectController.createProject(addProject.value);
        addProject.value = '';
      }
    }
  });
  let todaysDate = parseISO(dateController.getTodayDate())
  today.addEventListener('click', () => {
    dateController.showTasksBetweenDates(todaysDate, todaysDate)
    projectController.setCurrentProject(null)
    projectView.setHighlight(today);
  });
  thisWeek.addEventListener('click', () => {
    const nextWeek = add(todaysDate, {weeks: 1});
    dateController.showTasksBetweenDates(todaysDate, nextWeek);
    projectController.setCurrentProject(null)
    projectView.setHighlight(thisWeek);
  });

  // task list
  const addTask = document.getElementById('add-task');
  addTask.addEventListener('click', formView.renderAddForm);
  
  // completed list
  const completedContainer = document.getElementById('completed');
  completedContainer.addEventListener('click', toggleDropdown);
}

function toggleDropdown() {
  const tasks = document.querySelector('#completed-dropdown');
  if (tasks.style.display === 'none') {
    tasks.style.display = 'flex'
  } else {
    tasks.style.display = 'none';
  }
}

const mainView = {
  renderCompleteCount,
  setStaticListeners,
}

export default mainView;