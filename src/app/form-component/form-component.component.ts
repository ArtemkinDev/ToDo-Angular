import { Component, OnInit, ElementRef,  ViewChild} from '@angular/core';
import { Item } from '../lists';
import { TodoService } from '../todo.service';

@Component({
	selector: 'app-form-component',
	templateUrl: './form-component.component.html',
	styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
	@ViewChild('input') input: ElementRef;

	public isEmpty = false;

	constructor(private todoLists: TodoService) { }

	ngOnInit() {
	}

	addNewItem() {
		if(this.input.nativeElement.value) {
			this.isEmpty = false;
			let item: Item = {
				id: Date.now(),
				text:this.input.nativeElement.value 
			};

			this.todoLists.addNewItem(item);
			this.input.nativeElement.value = '';

		} else this.isEmpty = true;
		
	}

}
