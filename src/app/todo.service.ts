import { Injectable } from '@angular/core';

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
}
