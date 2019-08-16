import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IUser } from '../models/IUser';
import {IUserForm} from '../models/IUserForm';

@Injectable()
export class DataService {

  private baseUrl: string = 'https://reqres.in/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  userForm: IUserForm = {
    id: '',
    nombre:'',
    apellidopat: '',
    apellidomat: '',
    email: '',
    fchnac: '',
    fchingreso: '',
  }
  constructor(private _http: Http) { this.userForm = {
    id: '',
    nombre:'',
    apellidopat: '',
    apellidomat: '',
    email: '',
    fchnac: '',
    fchingreso: '',
  } 
}

  getUsers(page: string) {
    return this._http.get(this.baseUrl + '/users?page=' + page, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  getUser(id: Number) {
    return this._http.get(this.baseUrl + '/user/' + id, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createUser(user: IUserForm) {
    return this._http.post(this.baseUrl + '/user', JSON.stringify(user), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateUser(user: IUserForm) {
    return this._http.put(this.baseUrl + '/user/'+user.id, JSON.stringify(user), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }


  setter(user: IUserForm) {
    this.userForm = user;
  }

  getter() {
    return this.userForm;
  }

}
