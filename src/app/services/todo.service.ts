import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo-list.model';
const baseUrl = 'http://localhost:58376/api/todo';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(baseUrl);
  }
  get(id: any): Observable<ToDo> {
    return this.http.get<ToDo>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${baseUrl}?title=${title}`);
  }
}