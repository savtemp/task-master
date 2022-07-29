import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

export function saveState(){
    console.log('saving');
    let data = {
        tasks: ProxyState.tasks
    }
    localStorage.setItem('important-tasks', JSON.stringify(data))
}

export function loadState(){
    console.log('loading');
    let rawData = localStorage.getItem('important-tasks')
    if(rawData){
        let data = JSON.parse(rawData)
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
}