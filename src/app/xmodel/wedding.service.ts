import { Injectable } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../common/api.common';

const initialData: Wedding[] = [];

@Injectable()
export class WeddingService implements Resolve<boolean>{

  private model: Model<Wedding[]>;

  weddings$: Observable<Wedding[]>;

  constructor(
    private modelFactory: ModelFactory<Wedding[]>,
    private httpService: HttpService
  ) {
    this.model = this.modelFactory.create(initialData);
    this.weddings$ = this.model.data$;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.httpService.Get(apiURL.getWeddings).do(data => this.model.set(data === null ? [] : data)).mapTo(true);
  }

  addWedding(wedding: Wedding) {
    return this.httpService.Post(apiURL.createWedding, wedding).do(res => {
      const weddings = this.model.get();
      weddings.unshift(wedding);
      this.model.set(weddings);
    })
  }

  getWedding(id: string) {
    return this.httpService.Get(apiURL.getWedding, { id: id });
  }

  deleteWedding(id: string) {
    return this.httpService.Get(apiURL.deleteWedding, { id: id }).do(res => {
      var weddings = this.model.get();
      weddings.splice(weddings.indexOf(weddings.find(w => w.id === id)), 1);
      this.model.set(weddings);
    });
  }

  updateWedding(w: Wedding) {
    return this.httpService.Post(apiURL.updateWedding, w);
  }
}


export interface Wedding {
  id: string
  phone: string
  htime: number
  restaurant_id: string
  price: number
  created_by: string
  students: Student[]
  status: string
  verify_code: string
  address: Address
  number_of_students: number
}

interface Address {
  home_number: string
  street: string
  district: string
}

interface Student {
  id: string
  phone: string
  sex: string
  name: string
  status: string
}