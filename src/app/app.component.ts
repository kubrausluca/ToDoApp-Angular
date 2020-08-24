import { Component } from '@angular/core';
import { ToDo } from './Models/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  Item: ToDo = { ItemName: '', Completed: false };
  AddItem(){
    console.log("Eklenen Item: " + this.Item.ItemName);
    this.Item.ItemName = "";
  }
}
