import { Injectable } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../common/api.common';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';

const initialData: User[] = [];

@Injectable()
export class UserService implements Resolve<boolean>{

  private model: Model<User[]>;

  user$: Observable<User[]>;

  constructor(
    private modelFactory: ModelFactory<User[]>,
    private httpService: HttpService
  ) {
    this.model = this.modelFactory.create(initialData);
    this.user$ = this.model.data$;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.httpService.Get(apiURL.getUsers).do(data => this.model.set(data ? data : [])).mapTo(true);
  }

  getUsers(role: string) {
    return this.httpService.Get(apiURL.getUsers, { role: role }).do(data => this.model.set(data ? data : []));
  }

  getUsersByRole(role: string) {
    return this.httpService.Get(apiURL.getUsers, { role: role })
  }

  getManagers() {
    return this.httpService.Get(apiURL.getManagers)
  }

  getUser(id: string) {
    return this.httpService.Get<User>(apiURL.getUser, { id: id })
  }

  createUser(user: User) {
    return this.httpService.Post(apiURL.createUser, user).do(res => {
      var users = this.model.get();
      users.unshift(res);
      this.model.set(users);
    })
  }

  deleteUser(id: string) {
    return this.httpService.Get(apiURL.deleteUser, { id: id }).do(res => {
      var users = this.model.get();
      users.splice(users.indexOf(users.find(user => user.id === id)), 1);
      this.model.set(users);
    })
  }

  updateSupervisor(u: User) {
    return this.httpService.Post(apiURL.updateSupervisor, u)
  }

  changePassword(body) {
    return this.httpService.Post(apiURL.changePassword, body)
  }
}

export interface User {
  id: string
  name: string
  phone: string
  password: string
  restaurant_id: string
  restaurant_name: string
  restaurant_address: string
  role: string
  information: Information

}

interface Information {
  height: number
  weight: number
  sex: boolean
  rating: number
  birth_year: number
  balance: number
  finish_wedding: number
}