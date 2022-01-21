import format from "date-fns/format";
import { compareAsc, compareDesc, parseISO } from "date-fns";
import { taskList } from "../Models/task-model";
import taskView from "../Views/task-view";
import mainView from "../Views/main-view";

function setHeaderDate() {
  const date = getTodayDate();
  const headerDate = document.querySelector('#header > h4');
  headerDate.textContent = format(parseISO(date), 'PPP');
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

function validateDate(date) {
  // compareAsc returns -1 if first date is before second
  date = parseISO(date);
  const value = compareAsc(date, parseISO(getTodayDate()));
  if (value === -1) {
    return false;
  }
  return true;
}

function showTasksBetweenDates(date1, date2) {
  taskView.hideAllTasks();
  taskView.hideAddButton();
  let completeCount = 0;
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].dueDate === '') { continue; }
    if ((compareAsc(taskList[i].dueDate, date1) !== -1) &&
        (compareAsc(taskList[i].dueDate, date2) !==  1)) {
      if (taskList[i].isComplete) { completeCount++; }
      taskView.renderTask(taskList[i]);
    }
  }
  const header = document.querySelector('#header > h1');
  if (date1 === date2) {
    header.textContent = 'Due Today';
  } else {
    date2 = format(date2, 'Do MMMM');
    header.textContent = `Due by ${date2}`;
  }
  mainView.renderCompleteCount(completeCount);
}

const dateController = {
  setHeaderDate,
  getTodayDate,
  validateDate,
  showTasksBetweenDates,
}

export default dateController;