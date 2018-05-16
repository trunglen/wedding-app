import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../common/api.common';
import { Address } from './wedding.service';

@Injectable()
export class ReportService {
    constructor(
        private httpService: HttpService
    ) { }

    getRestaurantReport() {
        return this.httpService.Get(apiURL.getRestaurantReport)
    }

    getWeddingReport() {
        return this.httpService.Get(apiURL.getWeddingReport)
    }

    getGeneralReport() {
        return this.httpService.Get(apiURL.getGeneralReport)
    }
}

export interface RestaurantReport {
    restaurant_name: string
    restaurant_id: string
    wedding_count: number
    total: number
}

export interface WeddingReport {
    wedding_address: Address
    wedding_id: string
    total: number
    paid_student: boolean
}

export interface GeneralReport {
    all: number;
    finish: number;
    missing: number;
    cashback: number;
}