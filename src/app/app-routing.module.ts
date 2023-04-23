import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/add-todo-list/add-todo-list.component';
import { ToDoDetailsComponent } from './components/add-todo-details/add-todo-details.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/:id', component: ToDoDetailsComponent },
  { path: 'add', component: AddTodoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
