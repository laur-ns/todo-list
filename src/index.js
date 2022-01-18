import displayController from './Controllers/display-controller';
import tasks from './Controllers/task-controller';
import view from './Views/dom-manipulator';

// -- init -- //
tasks.showAllTasks();
displayController.showProjects();
displayController.setInitListeners();