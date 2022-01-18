import displayController from './Controllers/display-controller';
import projectController from './Controllers/project-controller';
import tasks from './Controllers/task-controller';

// -- init -- //
tasks.showAllTasks();
projectController.showProjects();
displayController.setInitListeners();