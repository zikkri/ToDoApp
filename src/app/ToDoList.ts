import { ToDoItem } from "./ToDoItem";

export class ToDoList{
  
  constructor(public user: string, private todoItems: ToDoItem[] = []){
  }

  get items(): readonly ToDoItem[]{
    return this.todoItems;
  }

  addItems(task: string){
    this.todoItems.push(new ToDoItem(task));
  }
}