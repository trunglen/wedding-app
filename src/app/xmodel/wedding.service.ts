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
}


export interface Wedding {
  id: string
  phone: string
  htime: string
  restaurant_id: string
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