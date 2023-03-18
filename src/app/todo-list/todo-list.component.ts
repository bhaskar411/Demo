import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/Models/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoForm!:FormGroup;
  todoList !: Todo[];
  constructor(private TodoServe : TodoService) { }

  ngOnInit(): void {

    this.TodoServe.getList().subscribe(list =>{
      this.todoList = list;
      console.log(list);
    },err =>{
      console.log(err);
    })


    this.todoForm = new FormGroup({
      name:new FormControl("",Validators.required),
      startDate:new FormControl("",Validators.required),
      endDate:new FormControl("",Validators.required)
    })

  }

  onSubmit(){
    this.TodoServe.add(this.todoForm).subscribe(res=>{
      alert("Todo add succesfully");
    },err=>{
      alert("Failed");
      console.log(err);

    })
  };

  onclick(todo:Todo){
    this.todoForm = new FormGroup({
      name:new FormControl(todo.name,Validators.required),
      startDate:new FormControl(todo.startDate,Validators.required),
      endDate:new FormControl(todo.endDate,Validators.required)
    })
    console.log("click");
  };

  readOnly(str:String):boolean{
    if(str == "Bhaskar") return true;
    return false;
  }

}
