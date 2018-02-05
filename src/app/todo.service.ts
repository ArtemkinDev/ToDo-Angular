import { Injectable } from '@angular/core';
import { Item } from './lists';

@Injectable()
export class TodoService {
  lists = [
  {
    id: 1,
    text: 'Some new task'
  },
  {
    id: 2,
    text: 'Some new task 2'
  },
  {
    id: 3,
    text: 'Some new task 3'
  }
  ]

  deleteItem(id: number) {
    let index = this.lists.findIndex((item) => {
      return item.id === id;
    });
    this.lists.splice(index, 1);
  }

  addNewItem(item: Item) {
    this.lists.push(item);
  }
  editItem(id: number, text: string) {
    let index = this.lists.findIndex((item) => {
      return item.id === id;
    });
    this.lists[index].text = text;
  }
}
