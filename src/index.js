import mainController from './Controllers/main-controller';
import projectController from './Controllers/project-controller';
import formView from './Views/form-view';
import mainView from './Views/main-view';

// -- init -- //
mainController.showAllTasks();
projectController.showAllProjects();
mainView.setStaticListeners();
formView.setListeners();