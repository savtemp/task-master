import { ItemsController } from "./Controllers/ItemsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  tasksController = new TasksController();

  itemsController = new ItemsController();
}

window["app"] = new App();
