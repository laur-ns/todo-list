import projectController from './Controllers/project-controller';
import taskController from './Controllers/task-controller';
import mainView from './Views/main-view';

// -- init -- //
taskController.showAllTasks();
projectController.showAllProjects();
mainView.setStaticListeners();