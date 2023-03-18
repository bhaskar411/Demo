import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from 'src/Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = environment.apiBaseUrl + "Todos";

  private httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private client: HttpClient) { }

  getList() :Observable<Todo[]>{
    return this.client.get<Todo[]>(this.apiUrl);
  };
}
