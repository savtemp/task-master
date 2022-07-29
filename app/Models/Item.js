import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Item{
    constructor(data){
        this.id = data.id || generateId()
        this.body = data.body
        this.taskId = data.taskId
    }

    get Template(){
        return `
        <div class="row bg-primary">
            <div class="col-12">
                <p>${this.body}</p>
            </div>
        </div>
        `
    }
}