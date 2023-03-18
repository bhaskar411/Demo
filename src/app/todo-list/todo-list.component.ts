import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/Models/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList !: Todo[];
  constructor(private TodoServe : TodoService) { }

  ngOnInit(): void {

    this.TodoServe.getList().subscribe(list =>{
      this.todoList = list;
      console.log(list);
    },err =>{
      console.log(err);
    })

  }

}
