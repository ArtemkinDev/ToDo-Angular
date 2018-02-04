import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Item } from '../lists';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item-component.component.html',
  styleUrls: ['./list-item-component.component.scss']
})
export class ListItemComponentComponent implements OnInit {

  @Input('list') list: Item;
  @ViewChild('checkbox') checkbox: ElementRef;
  @Output('deleteItem') deleteItem = new EventEmitter<number>();

  public taskDone = false;

  constructor() { }

  ngOnInit() {}

  done() {
    this.taskDone = this.checkbox.nativeElement.checked;
  }

  deletedItem(id: number) {
    this.deleteItem.emit(id);
  }

}
