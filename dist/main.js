/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controllers/display-controller.js":
/*!***********************************************!*\
  !*** ./src/Controllers/display-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_task_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/task-list */ \"./src/Models/task-list.js\");\n/* harmony import */ var _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/dom-manipulator */ \"./src/Views/dom-manipulator.js\");\n/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-controller */ \"./src/Controllers/task-controller.js\");\n/* harmony import */ var _Models_project_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/project-list */ \"./src/Models/project-list.js\");\n/* -- this module primarily contains event listeners -- */\n\n\n\n\n\n\nfunction setInitListeners() {\n  // sidebar\n  const allTasks = document.querySelector('.all-tasks');\n  allTasks.addEventListener('click', console.log); // taskController.showAllTasks\n  const allProjectElements = document.querySelectorAll('.all-tasks ~ li');\n  allProjectElements.forEach((e) => {\n    e.addEventListener('click', setProjectListener.bind(null, e));\n  });\n  const addProject = document.getElementById('add-project');\n  addProject.addEventListener('click', console.log) // use view to change display, then use projectcontroller to add\n  const today = document.getElementById('today');\n  const nextWeek = document.getElementById('next-week');\n  today.addEventListener('click', () => {\n    taskController.showTasksBetweenDates(/* today, tomorrow*/);\n  });\n  nextWeek.addEventListener('click', () => {\n    taskController.showTasksBetweenDates(/* today, next week */);\n  });\n\n  // task list\n  const tasks = document.querySelectorAll('#task-list > *:not(#add-task), #completed-dropdown > *');\n  tasks.forEach((e) => setTaskListener(e));\n  const addTask = document.getElementById('add-task');\n  addTask.addEventListener('click', _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showAddTaskForm);\n  \n  // completed list\n  const completedContainer = document.getElementById('completed');\n  let toggleDrop = false;\n  completedContainer.addEventListener('click', () => {\n    if (!toggleDrop) {\n      toggleDrop = true;\n      // show the dropdown using view method\n      console.log('dropdown');\n    }\n    else {\n      // hide the dropdown\n      toggleDrop = false;\n    }\n  });\n}\n\nfunction setTaskListener(node) {\n  const id = parseInt(node.getAttribute('id'));\n  const index = _task_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getIndexbyId(id)\n  const trash = node.querySelector('.trash-icon');\n  trash.addEventListener('click', () =>  _task_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(id))\n  const modify = node.querySelector('.modify-icon');\n  modify.addEventListener('click', () => console.log('modifying...'));\n  const checkbox = node.querySelector('input');\n  checkbox.addEventListener('click', () => {\n    if (!_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index].isComplete) {\n      _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideTask(id);\n      _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendCompletedTask(_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index]);\n      _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index].isComplete = true;\n    }\n    else {\n      _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideTask(id);\n      _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTask(_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index])\n      _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index].isComplete = false;\n    }\n    const newTask = document.getElementById(id);\n    setTaskListener(newTask);\n    _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateCompletedCount(_task_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCompletedNumber());\n  })\n}\n\nfunction showAllProjects() {\n  const projectsToClear = document.querySelectorAll('.all-tasks ~ li');\n  projectsToClear.forEach(e => {\n    e.remove();\n  });\n  for(let i = 0; i < _Models_project_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length; i++) {\n    _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendProject(_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[i].name);\n  }\n}\n\nfunction setProjectListener(proj) {\n  // set listener for project passed by argument\n  console.log(proj);\n}\n\nconst displayController = {\n  setInitListeners,\n  setTaskListener,\n  setProjectListener,\n  showAllProjects,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/display-controller.js?");

/***/ }),

/***/ "./src/Controllers/task-controller.js":
/*!********************************************!*\
  !*** ./src/Controllers/task-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_task_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/task-list */ \"./src/Models/task-list.js\");\n/* harmony import */ var _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/dom-manipulator */ \"./src/Views/dom-manipulator.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ \"./src/Controllers/display-controller.js\");\n\n\n\n\nfunction create(obj) {\n  let index = (_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.push((0,_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)(obj))) - 1;\n  _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTask(_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index])\n  let taskNode = document.getElementById(`${_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index].id}`);\n  _display_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setTaskListener(taskNode);\n}\n\nfunction remove(id) {\n  const index = getIndexbyId;\n  _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideTask(id);\n  _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.splice(index, 1);\n}\n\nfunction getIndexbyId(id) {\n  const index = _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.findIndex(e => e.id === id);\n  return index;\n}\n\nfunction getCompletedNumber(project) {\n  let numCompleted = 0\n  if (project === undefined) {\n    _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach(a => {\n      if (a.isComplete) { numCompleted++ }\n    });\n  }\n  _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach(a => {\n    if (a.isComplete && a.project === project) { numCompleted++ }\n  });\n  return numCompleted;\n}\n\nfunction showAllTasks(project) {\n  let allTasks = [];\n  if (project === undefined) { // if no project specified, display all\n    allTasks = _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList;\n  }\n  else { // find tasks for each project\n    _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach(a => {\n      if (a.project === project) { allTasks.push(a) }\n    });\n  }\n  allTasks.forEach(a => {\n    if (a.isComplete) {\n      _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendCompletedTask(a)\n      return;\n    }\n    _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTask(a);\n  });\n  const completedCount = getCompletedNumber(project);\n  _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateCompletedCount(completedCount);\n}\n\nconst tasks = {\n  create,\n  remove,\n  getIndexbyId,\n  showAllTasks,\n  getCompletedNumber,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/task-controller.js?");

/***/ }),

/***/ "./src/Models/project-list.js":
/*!************************************!*\
  !*** ./src/Models/project-list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet projectList = [\n  'test 1',\n  'test 2',\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todo-list/./src/Models/project-list.js?");

/***/ }),

/***/ "./src/Models/task-list.js":
/*!*********************************!*\
  !*** ./src/Models/task-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"TaskFactory\": () => (/* binding */ TaskFactory)\n/* harmony export */ });\nconst taskList = [];\n\ntaskList[0] = {\n  name: 'finish back end',\n  isComplete: false,\n  project: 'code',\n  id: 123412342,\n  priority: 'medium',\n}\ntaskList[1] = {\n  name: 'finish front end',\n  isComplete: true,\n  project: 'study',\n  id: 1345325435,\n  priority: 'high',\n}\n\nconst TaskFactory = (obj) => {\n  return {\n    name: obj.name,\n    description: obj.description,\n    dueDate: obj.dueDate,\n    isComplete: false,\n    project: obj.project,\n    id: Date.now(),\n    priority: obj.priority,\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Models/task-list.js?");

/***/ }),

/***/ "./src/Views/dom-manipulator.js":
/*!**************************************!*\
  !*** ./src/Views/dom-manipulator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/task-controller */ \"./src/Controllers/task-controller.js\");\n\n\n/* task element that will be cloned to create new tasks */\nconst taskTemplate = document.createElement('div');\ntaskTemplate.classList.add('task-container', 'border');\nconst label = document.createElement('label')\ntaskTemplate.appendChild(label).classList.add('checkbox');\nconst input = document.createElement('input');\ninput.setAttribute('type', 'checkbox');\ninput.classList.add('checkbox-hidden');\nlabel.appendChild(input);\nconst replacement = document.createElement('div');\nreplacement.classList.add('checkbox-replacement');\nlabel.appendChild(replacement)\nconst name = document.createElement('p');\nname.textContent = 'Finish todo list';\nlabel.appendChild(name);\nconst options = document.createElement('div');\noptions.classList.add('options-container');\ntaskTemplate.appendChild(options);\nconst dueDate = document.createElement('span');\ndueDate.classList.add('due-date');\ndueDate.textContent = '17/01/22';\noptions.appendChild(dueDate);\nconst modifyIcon = document.createElement('img');\nmodifyIcon.classList.add('modify-icon')\nmodifyIcon.src = './assets/modify-outline.svg';\nconst trashIcon = document.createElement('img');\ntrashIcon.classList.add('trash-icon')\ntrashIcon.src = './assets/trash-outline.svg';\noptions.appendChild(modifyIcon);\noptions.appendChild(trashIcon);\n//*  -- *//\n\nconst showAddTaskForm = () => {\n  const newTask = {\n    name: prompt('enter name'),\n    description: prompt('enter description'),\n    dueDate: prompt('enter due date'),\n    project: prompt('enter project'),\n    priority: 'high',\n  }\n  _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(newTask);\n}\n\nconst appendTask = task => {\n  const newTask = taskTemplate.cloneNode(true);\n  const taskName = newTask.querySelector('p');\n  const dueDate = newTask.querySelector('.due-date');\n  const container = document.querySelector('#task-list');\n  const addTask = document.getElementById('add-task');\n  newTask.setAttribute('id', `${task.id}`)\n  taskName.textContent = task.name;\n  dueDate.textContent = task.dueDate;\n  container.insertBefore(newTask, addTask);\n}\n\nconst hideTask = nodeID => {\n  const taskNode = document.getElementById(nodeID);\n  taskNode.remove();\n}\n\nconst appendCompletedTask = task => {\n  const newTask = taskTemplate.cloneNode(true);\n  const taskName = newTask.querySelector('p');\n  const strike = document.createElement('strike');\n  const dueDate = newTask.querySelector('.due-date');\n  const container = document.querySelector('#completed-dropdown');\n  const checkbox = newTask.querySelector('input');\n  newTask.setAttribute('id', `${task.id}`)\n  taskName.textContent = '';\n  strike.textContent = task.name;\n  taskName.appendChild(strike)\n  dueDate.textContent = task.dueDate;\n  container.appendChild(newTask);\n  checkbox.checked = true;\n}\n\nfunction updateCompletedCount(count) {\n  const element = document.querySelector('#completed > h2');\n  element.textContent = `Completed (${count})`\n}\n\nfunction appendProject(name) {\n  console.log(name);\n}\n\nconst view = {\n  showAddTaskForm,\n  appendTask,\n  appendCompletedTask,\n  hideTask,\n  updateCompletedCount,\n  appendProject,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://todo-list/./src/Views/dom-manipulator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controllers_display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controllers/display-controller */ \"./src/Controllers/display-controller.js\");\n/* harmony import */ var _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/task-controller */ \"./src/Controllers/task-controller.js\");\n/* harmony import */ var _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/dom-manipulator */ \"./src/Views/dom-manipulator.js\");\n\n\n\n\n// -- init -- //\n_Controllers_task_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showAllTasks();\n_Controllers_display_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAllProjects();\n_Controllers_display_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setInitListeners();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;