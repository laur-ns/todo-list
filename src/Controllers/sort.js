import { compareDesc, compareAsc, parseISO } from "date-fns";
import { taskList } from "../Models/task";
import taskView from "../Views/task";
import taskController from "./task";
import controls from "../Views/controls";

let orderedNodes = [];

function setNewOrder(select) {
  if (select === 'desc') {
    orderedNodes.sort((a, b) => {
      const aIndex = taskController.getIndexbyId(
          parseInt(a.getAttribute('id')));
      const bIndex = taskController.getIndexbyId(
          parseInt(b.getAttribute('id')));
      const aDate = parseISO(taskList[aIndex].dueDate);
      const bDate = parseISO(taskList[bIndex].dueDate);
      return compareDesc(aDate, bDate);
    })
  } else if (select === 'asc') {
    orderedNodes.sort((a, b) => {
      const aIndex = taskController.getIndexbyId(
          parseInt(a.getAttribute('id')));
      const bIndex = taskController.getIndexbyId(
          parseInt(b.getAttribute('id')));
      const aDate = parseISO(taskList[aIndex].dueDate);
      const bDate = parseISO(taskList[bIndex].dueDate);
      return compareAsc(aDate, bDate);
    })
  }
}

function appendIncompleteNode(node) {
  const container = document.querySelector('#task-list');
  const addTaskNode = document.getElementById('add-task');
  container.insertBefore(node, addTaskNode);
}

function appendCompleteNode(node) {
  const container = document.querySelector('#completed-dropdown');
  container.appendChild(node);
}

export default function sortDate(node) {
  if (node.value === 'none') {
    controls.resetFilters();
    return;
  }
  node.classList.add('focus');
  orderedNodes = [];
  const taskWrappers = taskView.selectAllTasks();
  for (let i = 0; i < taskWrappers.length; i++) {
    orderedNodes.push(taskWrappers[i])
  }
  setNewOrder(node.value);
  for (let i = 0; i < orderedNodes.length; i++) {
    if (orderedNodes[i].classList.contains('complete')) {
      appendCompleteNode(orderedNodes[i]);
    } else {
      appendIncompleteNode(orderedNodes[i])
    }
  }
}

//  const taskWrappers = document.querySelectorAll('.task-container:not(#add-task) p');
// use that for search