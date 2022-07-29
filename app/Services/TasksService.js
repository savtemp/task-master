import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService{
    createTask(newTask){
        console.log('creating a task in service', newTask);
        ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
        console.log(ProxyState.tasks);
    }

    deleteTask(id){
        console.log('delete task in service', id);
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
}


export const tasksService = new TasksService()