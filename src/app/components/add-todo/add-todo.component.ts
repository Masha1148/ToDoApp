import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo-list.model';
import { ToDoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo: ToDo = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private todoService: ToDoService) { }
  ngOnInit(): void {
  }
  saveTodo(): void {
    const data = {
      title: this.todo.title,
      description: this.todo.description
    };
    this.todoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newToDo(): void {
    this.submitted = false;
    this.todo = {
      title: '',
      description: '',
      published: false
    };
  }
}