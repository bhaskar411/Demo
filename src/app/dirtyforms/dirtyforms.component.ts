import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dirtyforms',
  templateUrl: './dirtyforms.component.html',
  styleUrls: ['./dirtyforms.component.css']
})
export class DirtyformsComponent implements OnInit {

  settings!:FormGroup
  isDirty$!:Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){}

}
