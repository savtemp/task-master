import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Item{
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
        this.taskId = data.taskId
    }

    get Template(){
        return `
        <div class="row">
            <li>${this.name}</li>
        </div>
        `
    }
}