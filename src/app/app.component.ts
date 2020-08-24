import { Component } from '@angular/core';
import { ToDo } from './Models/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ItemList: ToDo[] = [];
  Item: ToDo = { Completed: false, ItemName: '' };
  AddItem(){
    // console.log("Eklenen Item: " + this.Item.ItemName);
    this.ItemList.push({ 'Completed': this.Item.Completed, 'ItemName': this.Item.ItemName });  // ilgili item dizimize eklenmiş oldu
    this.Item.ItemName = '';
    console.log(this.ItemList);

  }
}
