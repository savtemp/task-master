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
      name: 'Groceries',
      id: '62e30d50864cc827321eb06b'
    }), 
    new Task({
      name: 'Chores',
      id:'62e34ba154acde76d539949b',
    }),
    new Task({
      name: 'Do Homework',
      id:'62e34bab9050ed2e77c6bed2',
    })
  ]

  /** @type {import('./Models/Item').Item[]} */
  items = [
    new Item({
      taskId: '62e30d50864cc827321eb06b',
      name: 'buy corn',
    }),
    new Item({
      name: 'buy diet coke',
      taskId: '62e30d50864cc827321eb06b',
    }),
    new Item({
      name:'Coding quiz',
      taskId:'62e34bab9050ed2e77c6bed2'
    }),
    new Item({
      name:'walk the dog',
      taskId:'62e34ba154acde76d539949b',
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
