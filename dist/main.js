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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Views/dom-manipulator */ \"./src/Views/dom-manipulator.js\");\n/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-controller */ \"./src/Controllers/task-controller.js\");\n/* -- this module primarily contains event listeners -- */\n\n\n\n// ensure every task is already displayed before running this\nfunction setInitListeners() {\n  // sidebar\n  const allTasks = document.querySelector('.all-tasks');\n  allTasks.addEventListener('click', console.log); // taskController.showAllTasks\n  const allProjectElements = document.querySelectorAll('.all-tasks ~ li');\n  allProjectElements.forEach((e) => {\n    e.addEventListener('click', setProjectListener.bind(null, e));\n  });\n  const addProject = document.getElementById('add-project');\n  addProject.addEventListener('click', console.log) // use view to change display, then use projectcontroller to add\n  const today = document.getElementById('today');\n  const nextWeek = document.getElementById('next-week');\n  today.addEventListener('click', () => {\n    taskController.showTasksBetweenDates(/* today, tomorrow*/);\n  });\n  nextWeek.addEventListener('click', () => {\n    taskController.showTasksBetweenDates(/* today, next week */);\n  });\n\n  // task list\n  const tasks = document.querySelectorAll('#task-list > *:not(#add-task)');\n  tasks.forEach((e) => setTaskListener(e));\n  const addTask = document.getElementById('add-task');\n  addTask.addEventListener('click', _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAddTaskForm);\n  \n  // completed list\n  const completedContainer = document.getElementById('completed');\n  let toggleDrop = false;\n  completedContainer.addEventListener('click', () => {\n    if (!toggleDrop) {\n      toggleDrop = true;\n      // show the dropdown using view method\n      console.log('dropdown');\n    }\n    else {\n      // hide the dropdown\n      toggleDrop = false\n    }\n  });\n}\n\nfunction setTaskListener(node) {\n  const taskId = parseInt(node.getAttribute('id'));\n  const trash = node.querySelector('.trash-icon');\n  trash.addEventListener('click', () =>  _task_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(taskId))\n  const modify = node.querySelector('.modify-icon');\n  modify.addEventListener('click', () => console.log('modifying...'));\n}\n\nfunction setProjectListener(proj) {\n  // set listener for project passed by argument\n  console.log(proj);\n}\n\nconst displayController = {\n  setInitListeners,\n  setTaskListener,\n  setProjectListener,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/display-controller.js?");

/***/ }),

/***/ "./src/Controllers/task-controller.js":
/*!********************************************!*\
  !*** ./src/Controllers/task-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_task_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/task-list */ \"./src/Models/task-list.js\");\n/* harmony import */ var _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/dom-manipulator */ \"./src/Views/dom-manipulator.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ \"./src/Controllers/display-controller.js\");\n\n\n\n\nfunction createTask(obj) {\n  let index = (_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.push((0,_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)(obj))) - 1;\n  _Views_dom_manipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appendTask(_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index])\n  let taskNode = document.getElementById(`${_Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList[index].id}`);\n  _display_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setTaskListener(taskNode);\n}\n\nfunction deleteTask(id) {\n  // scans array for Id, and deletes it\n  const task = _Models_task_list__WEBPACK_IMPORTED_MODULE_0__.taskList.find(e => e.id === id)\n  console.log(`deleting ${task.name}`)\n}\n\nconst tasks = {\n  createTask,\n  deleteTask,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/task-controller.js?");

/***/ }),

/***/ "./src/Models/project-list.js":
/*!************************************!*\
  !*** ./src/Models/project-list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet projectList = [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todo-list/./src/Models/project-list.js?");

/***/ }),

/***/ "./src/Models/task-list.js":
/*!*********************************!*\
  !*** ./src/Models/task-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"TaskFactory\": () => (/* binding */ TaskFactory)\n/* harmony export */ });\nconst taskList = [];\n\nconst TaskFactory = (obj) => {\n  return {\n    name: obj.name,\n    description: obj.description,\n    dueDate: obj.dueDate,\n    isComplete: obj.isComplete,\n    project: obj.project,\n    id: Date.now(),\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Models/task-list.js?");

/***/ }),

/***/ "./src/Views/dom-manipulator.js":
/*!**************************************!*\
  !*** ./src/Views/dom-manipulator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/task-controller */ \"./src/Controllers/task-controller.js\");\n\n\n// task element that will be cloned to create new tasks\nconst taskTemplate = document.createElement('div');\ntaskTemplate.classList.add('task-container', 'border');\nconst label = document.createElement('label')\ntaskTemplate.appendChild(label).classList.add('checkbox');\nconst input = document.createElement('input');\ninput.setAttribute('type', 'checkbox');\ninput.classList.add('checkbox-hidden');\nlabel.appendChild(input);\nconst replacement = document.createElement('div');\nreplacement.classList.add('checkbox-replacement');\nlabel.appendChild(replacement)\nconst name = document.createElement('p');\nname.textContent = 'Finish todo list';\nlabel.appendChild(name);\nconst options = document.createElement('div');\noptions.classList.add('options-container');\ntaskTemplate.appendChild(options);\nconst dueDate = document.createElement('span');\ndueDate.classList.add('due-date');\ndueDate.textContent = '17/01/22';\noptions.appendChild(dueDate);\nconst modifyIcon = document.createElement('img');\nmodifyIcon.classList.add('modify-icon')\nmodifyIcon.src = './assets/modify-outline.svg';\nconst trashIcon = document.createElement('img');\ntrashIcon.classList.add('trash-icon')\ntrashIcon.src = './assets/trash-outline.svg';\noptions.appendChild(modifyIcon);\noptions.appendChild(trashIcon);\n// -- //\n\nconst showAddTaskForm = () => {\n  const newTask = {\n    name: prompt('enter name'),\n    description: prompt('enter description'),\n    dueDate: prompt('enter due date'),\n    isComplete: false,\n    project: prompt('enter project'),\n  }\n  _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTask(newTask);\n}\n\nconst appendTask = (task) => {\n  const newTask = taskTemplate.cloneNode(true);\n  newTask.setAttribute('id', `${task.id}`)\n  const taskName = newTask.querySelector('p');\n  taskName.textContent = task.name;\n  const dueDate = newTask.querySelector('.due-date');\n  dueDate.textContent = task.dueDate;\n  const container = document.querySelector('#task-list');\n  const addTask = document.getElementById('add-task');\n  container.insertBefore(newTask, addTask);\n}\n\nconst view = {\n  showAddTaskForm,\n  appendTask\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://todo-list/./src/Views/dom-manipulator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controllers_display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controllers/display-controller */ \"./src/Controllers/display-controller.js\");\n/* harmony import */ var _Models_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/project-list */ \"./src/Models/project-list.js\");\n/* harmony import */ var _Models_task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/task-list */ \"./src/Models/task-list.js\");\n\n\n\n\n// -- init -- //\n_Controllers_display_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setInitListeners();\n\n\n// some testing\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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