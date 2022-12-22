import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do App';  
  
  private list = new ToDoList("Zack", [
    new ToDoItem("Get Stocking Stuffers"),
    new ToDoItem("Go to Gym"),
    new ToDoItem("Get a new cat tree")
  ])

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly ToDoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem){
    if(newItem != ""){
      this.list.addItems(newItem);
    }
  }  
  showComplete: boolean = false;
}