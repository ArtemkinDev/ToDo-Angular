import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListsComponentComponent } from './lists-component/lists-component.component';
import { ListItemComponentComponent } from './list-item-component/list-item-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponentComponent,
    ListItemComponentComponent,
    FormComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
