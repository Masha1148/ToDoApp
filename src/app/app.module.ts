import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ToDoDetailsComponent } from './components/add-todo-details/add-todo-details.component';
import { TodoListComponent } from './components/add-todo-list/add-todo-list.component';

@NgModule({
  
  declarations: [
    AppComponent,
    AddTodoComponent,
    ToDoDetailsComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

