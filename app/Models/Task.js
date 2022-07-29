import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Task{
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template(){
        return `
        <div class="col-4 bg-white elevation-2 rounded">
            <div class="row bg-success">
                <div class="col-12">
                    <p>${this.name}</p>
                </div>
            </div>
            <div class="row bg-primary">
                ${this.Items}
            </div>
        </div>
        `
    }
}


