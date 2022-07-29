import { Task } from "./Models/Task.js"
import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Task').Task[]} */
  tasks = [
    new Task({
      name: 'Groceries'
    })
  ]

  /** @type {import('./Models/Item').Item[]} */
  items = [
    new Item({
      body: 'buy corn'
    })
  ]

}







export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
