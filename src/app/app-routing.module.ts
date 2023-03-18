import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyformsComponent } from './dirtyforms/dirtyforms.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:"dirty",component:DirtyformsComponent},
  {path:"todo",component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
