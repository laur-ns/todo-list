import mainController from './Controllers/main-controller';
import projectController from './Controllers/project-controller';
import taskController from './Controllers/task-controller';
import mainView from './Views/main-view';

// -- init -- //
mainController.showAllTasks();
projectController.showAllProjects();
mainView.setStaticListeners();