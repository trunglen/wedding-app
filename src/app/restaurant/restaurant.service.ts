import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../common/api.common';

@Injectable()
export class RestaurantService {
    constructor(
        private httpService:HttpService
    ){}

    createRestaurant(body:any) {
        return this.httpService.Post(apiURL.createUser,body)
    }
}