import { Component, OnInit } from '@angular/core';
import { Item } from '../lists';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-lists-component',
  templateUrl: './lists-component.component.html',
  styleUrls: ['./lists-component.component.scss']
})
export class ListsComponentComponent implements OnInit {

  public listsOfItem: Item[] = [];

  constructor(private todoLists: TodoService) { }

  ngOnInit() {
    this.listsOfItem = this.todoLists.lists;
  }

  deletedId(id: number) {
    let index = this.listsOfItem.findIndex((item) => {
      return item.id === id;
    });
    this.listsOfItem.splice(index, 1);
  }

}
