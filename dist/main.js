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

/***/ "./src/Controllers/main-controller.js":
/*!********************************************!*\
  !*** ./src/Controllers/main-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Views_main_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Views/main-view */ \"./src/Views/main-view.js\");\n/* harmony import */ var _Views_task_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/task-view */ \"./src/Views/task-view.js\");\n/* harmony import */ var _Models_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/task-model */ \"./src/Models/task-model.js\");\n/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-controller */ \"./src/Controllers/task-controller.js\");\n\n\n\n\n\nfunction showTasksBetweenDates() {\n  console.log('showing tasks...');\n}\n\nfunction showAllTasks(project) {\n  _Views_task_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideAllTasks();\n  let tasksToRender = [];\n  if (project === undefined) {\n    // if no project specified, display all\n    tasksToRender = _Models_task_model__WEBPACK_IMPORTED_MODULE_2__.taskList;\n  } else {\n    // find tasks in project\n    _Models_task_model__WEBPACK_IMPORTED_MODULE_2__.taskList.forEach(a => {\n      if (a.project === project) { tasksToRender.push(a) }\n    });\n  }\n  tasksToRender.forEach(a => {\n    _Views_task_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTask(a);\n  });\n  const count = _task_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCompletedCount();\n  _Views_main_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderCompleteCount(count);\n}\n\nconst mainController = {\n  showTasksBetweenDates,\n  showAllTasks,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainController);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/main-controller.js?");

/***/ }),

/***/ "./src/Controllers/project-controller.js":
/*!***********************************************!*\
  !*** ./src/Controllers/project-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/project-model */ \"./src/Models/project-model.js\");\n/* harmony import */ var _Views_project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/project-view */ \"./src/Views/project-view.js\");\n\n\n\nlet currentProject = undefined;\n\nfunction createProject(pName) {\n  let badProjectName = false;\n  if (pName === '') {\n    alert('Please insert a name for your project!');\n    badProjectName = true;\n  }\n  _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(p => {\n    if (pName == p.name) {\n      alert(`${pName} already exists!`);\n      badProjectName = true;\n    }\n  });\n  if (badProjectName) { return; }\n  _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push({ name: pName, tasks: [] });\n  _Views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderProject(pName);\n  return pName;\n}\n\nfunction removeProject(pName) {\n  const i = getIndex(pName);\n  _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n}\n\nfunction getProjectTasks(pName) {\n  const i = getIndex(pName);\n  return _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\n}\n\nfunction setCurrentProject(pName) {\n  currentProject = pName;\n}\n\nfunction getCurrentProject() {\n  return currentProject;\n}\n\nfunction addTask(id, pName) {\n  if (getIndex(pName) === -1) {\n    createProject(pName);\n  }\n  const i = getIndex(pName);\n  _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].tasks.push(id);\n}\n\nfunction removeTask(id, pName) {\n  const i = getIndex(pName);\n  const indexOfTask = _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].tasks.findIndex(a => id === a);\n  _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].splice(indexOfTask, 1);\n}\n\nfunction showAllProjects() {\n  for(let i = 0; i < _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i++) {\n    _Views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderProject(_Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name);\n  }\n  _Views_project_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setHighlight(undefined);\n}\n\n// -- private functions -- //\nfunction getIndex(name) {\n  return _Models_project_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex(a => a.name === name);\n}\n\n\nconst projectController = {\n  createProject,\n  removeProject,\n  getProjectTasks,\n  setCurrentProject,\n  showAllProjects,\n  getCurrentProject,\n  removeTask,\n  addTask,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/project-controller.js?");

/***/ }),

/***/ "./src/Controllers/task-controller.js":
/*!********************************************!*\
  !*** ./src/Controllers/task-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_task_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/task-model */ \"./src/Models/task-model.js\");\n/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-controller */ \"./src/Controllers/project-controller.js\");\n/* harmony import */ var _Views_task_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Views/task-view */ \"./src/Views/task-view.js\");\n/* harmony import */ var _Views_main_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Views/main-view */ \"./src/Views/main-view.js\");\n\n\n\n\n\nfunction create(obj) {\n  let index = (_Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList.push((0,_Models_task_model__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)(obj))) - 1;\n  _project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(index, _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList[index].project);\n  _Views_task_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTask(_Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList[index])\n}\n\nfunction remove(id) {\n  const index = getIndexbyId(id);\n  _Views_task_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hideTask(id);\n  _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList.splice(index, 1);\n  _Views_main_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderCompleteCount(getCompletedCount());\n}\n\nfunction getIndexbyId(id) {\n  const index = _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList.findIndex(e => e.id === id);\n  return index;\n}\n\nfunction getCompletedCount() {\n  let numCompleted = 0\n  const currentProject = _project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCurrentProject();\n  if (currentProject === undefined) {\n    _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach(a => {\n      if (a.isComplete) { numCompleted++ }\n    });\n  }\n  _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach(a => {\n    if (a.isComplete && a.project === currentProject) { numCompleted++ }\n  });\n  return numCompleted;\n}\n\nfunction toggleComplete(id) {\n  let index = getIndexbyId(id);\n  if (!_Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList[index].isComplete) {\n    _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList[index].isComplete = true;\n  } else {\n    _Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList[index].isComplete = false;\n  }\n  _Views_task_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hideTask(id);\n  _Views_task_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTask(_Models_task_model__WEBPACK_IMPORTED_MODULE_0__.taskList[index])\n  _Views_main_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderCompleteCount(getCompletedCount());\n}\n\nconst taskController = {\n  create,\n  remove,\n  getIndexbyId,\n  toggleComplete,\n  getCompletedCount,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskController);\n\n//# sourceURL=webpack://todo-list/./src/Controllers/task-controller.js?");

/***/ }),

/***/ "./src/Models/project-model.js":
/*!*************************************!*\
  !*** ./src/Models/project-model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet projectList = [\n  {\n    name: 'name 1',\n    tasks: [1234, 5678],\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todo-list/./src/Models/project-model.js?");

/***/ }),

/***/ "./src/Models/task-model.js":
/*!**********************************!*\
  !*** ./src/Models/task-model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"TaskFactory\": () => (/* binding */ TaskFactory)\n/* harmony export */ });\nconst taskList = [];\n\ntaskList[0] = {\n  name: 'finish back end',\n  isComplete: false,\n  project: 'asdfasdf',\n  id: 123412342,\n  priority: 'medium',\n}\ntaskList[1] = {\n  name: 'finish front end',\n  isComplete: true,\n  project: 'study',\n  id: 1345325435,\n  priority: 'high',\n}\n\nconst TaskFactory = (obj) => {\n  return {\n    name: obj.name,\n    description: obj.description,\n    dueDate: obj.dueDate,\n    isComplete: false,\n    project: obj.project,\n    id: Date.now(),\n    priority: obj.priority,\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Models/task-model.js?");

/***/ }),

/***/ "./src/Views/main-view.js":
/*!********************************!*\
  !*** ./src/Views/main-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/main-controller */ \"./src/Controllers/main-controller.js\");\n/* harmony import */ var _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controllers/project-controller */ \"./src/Controllers/project-controller.js\");\n/* harmony import */ var _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controllers/task-controller */ \"./src/Controllers/task-controller.js\");\n/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-view */ \"./src/Views/project-view.js\");\n/* harmony import */ var _task_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-view */ \"./src/Views/task-view.js\");\n\n\n\n\n\n\nfunction renderCompleteCount(count) {\n  const element = document.querySelector('#completed > h2');\n  element.textContent = `Completed (${count})`;\n}\n\nfunction setStaticListeners() {\n  // sidebar\n  const allTasks = document.querySelector('.all-tasks');\n  const addProject = document.getElementById('add-project');\n  const today = document.getElementById('today');\n  const nextWeek = document.getElementById('next-week');\n  allTasks.addEventListener('click', () => {\n    _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setCurrentProject(undefined);\n    _project_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setHighlight(allTasks);\n    _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAllTasks(undefined)\n  });\n  addProject.addEventListener('click', () => {\n    _project_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderAddForm();\n  })\n  today.addEventListener('click', () => {\n    _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTasksBetweenDates(/* today, tomorrow*/);\n  });\n  nextWeek.addEventListener('click', () => {\n    _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTasksBetweenDates(/* today, next week */);\n  });\n\n  // task list\n  const addTask = document.getElementById('add-task');\n  addTask.addEventListener('click', _task_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"].renderAddForm);\n  \n  // completed list\n  const completedContainer = document.getElementById('completed');\n  completedContainer.addEventListener('click', toggleDropdown);\n}\n\nfunction toggleDropdown() {\n  console.log('toggling dropdown');\n}\n\nconst mainView = {\n  renderCompleteCount,\n  setStaticListeners,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainView);\n\n//# sourceURL=webpack://todo-list/./src/Views/main-view.js?");

/***/ }),

/***/ "./src/Views/project-view.js":
/*!***********************************!*\
  !*** ./src/Views/project-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/main-controller */ \"./src/Controllers/main-controller.js\");\n/* harmony import */ var _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controllers/project-controller */ \"./src/Controllers/project-controller.js\");\n\n\n\nfunction renderAddForm() {\n  _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProject(prompt('Insert project name'));\n}\n\nfunction renderProject(pName) {\n  const projectList = document.querySelector('.project-list > ul');\n  const project = document.createElement('li');\n  project.textContent = pName;\n  projectList.appendChild(project);\n  setListener(project);\n}\n\nfunction setHighlight(pNode) {\n  const projects = document.querySelectorAll('.project-list ul > *');\n  projects.forEach(e => {\n    // remove all highlights\n    e.classList.remove('highlight');\n  });\n  const toHighlight = _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCurrentProject();\n  console.log(toHighlight);\n  if (toHighlight === undefined) {\n    const allTasks = document.querySelector('.all-tasks');\n    allTasks.classList.add('highlight');\n  }\n  else if (pNode.textContent == toHighlight) {\n    pNode.classList.add('highlight');\n  }\n  return;\n}\n\nfunction setListener(pNode) {\n  const projectName = pNode.textContent;\n  pNode.addEventListener('click', () => {\n    _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setCurrentProject(projectName);\n    setHighlight(pNode);\n    _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAllTasks(projectName);\n  });\n}\n\nconst projectView = {\n  setListener,\n  renderAddForm,\n  renderProject,\n  setHighlight,\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectView);\n\n//# sourceURL=webpack://todo-list/./src/Views/project-view.js?");

/***/ }),

/***/ "./src/Views/task-view.js":
/*!********************************!*\
  !*** ./src/Views/task-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/task-controller */ \"./src/Controllers/task-controller.js\");\n\n\n/* task element that will be cloned to create new tasks */\nconst taskTemplate = document.createElement('div');\ntaskTemplate.classList.add('task-container', 'border');\nconst label = document.createElement('label')\ntaskTemplate.appendChild(label).classList.add('checkbox');\nconst input = document.createElement('input');\ninput.setAttribute('type', 'checkbox');\ninput.classList.add('checkbox-hidden');\nlabel.appendChild(input);\nconst replacement = document.createElement('div');\nreplacement.classList.add('checkbox-replacement');\nlabel.appendChild(replacement)\nconst name = document.createElement('p');\nname.textContent = 'Finish todo list';\nlabel.appendChild(name);\nconst options = document.createElement('div');\noptions.classList.add('options-container');\ntaskTemplate.appendChild(options);\nconst dueDate = document.createElement('span');\ndueDate.classList.add('due-date');\ndueDate.textContent = '17/01/22';\noptions.appendChild(dueDate);\nconst modifyIcon = document.createElement('img');\nmodifyIcon.classList.add('modify-icon')\nmodifyIcon.src = './assets/modify-outline.svg';\nconst trashIcon = document.createElement('img');\ntrashIcon.classList.add('trash-icon')\ntrashIcon.src = './assets/trash-outline.svg';\noptions.appendChild(modifyIcon);\noptions.appendChild(trashIcon);\n//*  -- *//\n\nfunction setListeners(node) {\n  const id = parseInt(node.getAttribute('id'));\n  const trash = node.querySelector('.trash-icon');\n  trash.addEventListener('click', () => {\n    _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(id);\n  });\n  const modify = node.querySelector('.modify-icon');\n  modify.addEventListener('click', () => console.log('modifying...'));\n  const checkbox = node.querySelector('input');\n  checkbox.addEventListener('click', () => {\n    _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleComplete(id);\n  });\n}\n\nfunction renderTask(task) {\n  const newTask = taskTemplate.cloneNode(true);\n  const taskName = newTask.querySelector('p');\n  const dueDate = newTask.querySelector('.due-date');\n  newTask.setAttribute('id', `${task.id}`)\n  if (!task.isComplete) {\n    const addTask = document.getElementById('add-task');\n    const container = document.querySelector('#task-list');\n    taskName.textContent = task.name;\n    dueDate.textContent = task.dueDate;\n    container.insertBefore(newTask, addTask);\n    setListeners(newTask);\n  } else {\n    const strike = document.createElement('strike');\n    const container = document.querySelector('#completed-dropdown');\n    const checkbox = newTask.querySelector('input');\n    taskName.textContent = '';\n    strike.textContent = task.name;\n    taskName.appendChild(strike)\n    dueDate.textContent = task.dueDate;\n    container.appendChild(newTask);\n    checkbox.checked = true;\n    setListeners(newTask)\n  }\n}\n\nfunction hideTask(id) {\n  const taskNode = document.getElementById(id);\n  taskNode.remove();\n}\n\nfunction hideAllTasks() {\n  const incompletes = document.querySelectorAll('#task-list > *:not(#add-task)');\n  const completes = document.getElementById('completed-dropdown');\n  completes.innerHTML = '';\n  incompletes.forEach(e => {\n    const id = e.getAttribute('id');\n    hideTask(id);\n  });\n}\n\nfunction renderEditForm() {\n}\n\nfunction renderAddForm() {\n  const newTaskObj = {\n    name: prompt('enter name'),\n    description: prompt('enter description'),\n    dueDate: prompt('enter due date'),\n    project: prompt('enter project'),\n    priority: 'high',\n  }\n  _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(newTaskObj);\n}\n\nconst taskView = {\n  setListeners,\n  renderTask,\n  hideTask,\n  hideAllTasks,\n  renderEditForm,\n  renderAddForm,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskView);\n\n//# sourceURL=webpack://todo-list/./src/Views/task-view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controllers/main-controller */ \"./src/Controllers/main-controller.js\");\n/* harmony import */ var _Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/project-controller */ \"./src/Controllers/project-controller.js\");\n/* harmony import */ var _Controllers_task_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controllers/task-controller */ \"./src/Controllers/task-controller.js\");\n/* harmony import */ var _Views_main_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Views/main-view */ \"./src/Views/main-view.js\");\n\n\n\n\n\n// -- init -- //\n_Controllers_main_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAllTasks();\n_Controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showAllProjects();\n_Views_main_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setStaticListeners();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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