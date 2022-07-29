import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { saveState } from "../Utils/LocalStorage.js";
import { loadState } from "../Utils/LocalStorage.js";

function _draw(){
    let template = ''
    let tasks = ProxyState.tasks
    tasks.forEach(t => template += t.Template)
    document.getElementById('task-box').innerHTML = template
}

export class TasksController{
    constructor(){
        console.log('tasks controller loaded');
        ProxyState.on('tasks', _draw)
        ProxyState.on('tasks', saveState)

        loadState()
        _draw()
    }

    createTask(){
        window.event.preventDefault()
        console.log('creating task');
        let form = window.event.target
        let newTask = {
            name: form.name.value
        }
        console.log(newTask);
        tasksService.createTask(newTask)
        _draw()
    }

    deleteTask(id){
        console.log('deleting task', id);
        tasksService.deleteTask(id)
    }
}