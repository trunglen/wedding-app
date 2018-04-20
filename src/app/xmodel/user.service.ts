import { Injectable } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../common/api.common';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import 'rxjs/add/operator/do';
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
    return this.httpService.Get(apiURL.getUsers).do(data => this.model.set(data === null ? [] : data)).mapTo(true);
  }

  createUser(user: User) {
    return this.httpService.Post(apiURL.createUser, user).subscribe(res => {
      var users = this.model.get();
      users.unshift(res);
      this.model.set(users);
    })
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

}
