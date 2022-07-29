import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Task{
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template(){
        return `
        <section class="col-4 bg-white elevation-2 rounded"
            <div>
                <p>${this.name}</p>
                <p class="text-end" onclick="app.tasksController.deleteTask('${this.id}')">X</p>
            </div>
            <div>
                <ul>${this.ItemsTemplate}</ul>
            </div>
            <form class="row">
                <div class="col-10">
                    <input name="name" id="name" type="text" class="form-control" placeholder="Task..."> 
                </div>
                <div class="col-2">
                <button class="btn btn-primary">Add</button>
                </div>
            </form>
        </section>
        `
    }

    get ItemsTemplate(){
        let template = ''
        ProxyState.items
        .filter(item => item.taskId == this.id)
        .forEach(item => template += item.Template)

        return template
    }
}


