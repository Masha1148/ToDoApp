import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoDetailsComponent } from './add-todo-details.component';

describe('AddTodoDetailsComponent', () => {
  let component: AddTodoDetailsComponent;
  let fixture: ComponentFixture<AddTodoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
