import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/models/todo-list.model';
@Component({
  selector: 'app-todo-details',
  templateUrl: './add-todo-details.component.html',
  styleUrls: ['./add-todo-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentTodo: ToDo = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';
  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }
  getTutorial(id: string): void {
    this.todoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTodo = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTodo.title,
      description: this.currentTodo.description,
      published: status
    };
    this.message = '';
    this.todoService.update(this.currentTodo.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTodo.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateTutorial(): void {
    this.message = '';
    this.todoService.update(this.currentTodo.id, this.currentTodo)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This todo was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteTutorial(): void {
    this.todoService.delete(this.currentTodo.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/todo']);
        },
        error: (e) => console.error(e)
      });
  }
}
