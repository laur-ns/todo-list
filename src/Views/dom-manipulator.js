import tasks from "../Controllers/task-controller";

// task element that will be cloned to create new tasks
const taskTemplate = document.createElement('div');
taskTemplate.classList.add('task-container', 'border');
const label = document.createElement('label')
taskTemplate.appendChild(label).classList.add('checkbox');
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.classList.add('checkbox-hidden');
label.appendChild(input);
const replacement = document.createElement('div');
replacement.classList.add('checkbox-replacement');
label.appendChild(replacement)
const name = document.createElement('p');
name.textContent = 'Finish todo list';
label.appendChild(name);
const options = document.createElement('div');
options.classList.add('options-container');
taskTemplate.appendChild(options);
const dueDate = document.createElement('span');
dueDate.classList.add('due-date');
dueDate.textContent = '17/01/22';
options.appendChild(dueDate);
const modifyIcon = document.createElement('img');
modifyIcon.classList.add('modify-icon')
modifyIcon.src = './assets/modify-outline.svg';
const trashIcon = document.createElement('img');
trashIcon.classList.add('trash-icon')
trashIcon.src = './assets/trash-outline.svg';
options.appendChild(modifyIcon);
options.appendChild(trashIcon);
// -- //

const showAddTaskForm = () => {
  const newTask = {
    name: prompt('enter name'),
    description: prompt('enter description'),
    dueDate: prompt('enter due date'),
    isComplete: false,
    project: prompt('enter project'),
  }
  tasks.createTask(newTask);
}

const appendTask = (task) => {
  const newTask = taskTemplate.cloneNode(true);
  newTask.setAttribute('id', `${task.id}`)
  const taskName = newTask.querySelector('p');
  taskName.textContent = task.name;
  const dueDate = newTask.querySelector('.due-date');
  dueDate.textContent = task.dueDate;
  const container = document.querySelector('#task-list');
  const addTask = document.getElementById('add-task');
  container.insertBefore(newTask, addTask);
}

const view = {
  showAddTaskForm,
  appendTask
}

export default view;