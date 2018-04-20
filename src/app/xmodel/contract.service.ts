import { Injectable } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';

const initialData: Contract = { prop: 'value' };

@Injectable()
export class ContractService {
  private model: Model<Contract>;

  contract$: Observable<Contract>;

  constructor(private modelFactory: ModelFactory<Contract>) {
    this.model = this.modelFactory.create(initialData);
    this.contract$ = this.model.data$;
  }

  updateProp(newPropValue: string) {
    const contract = this.model.get();

    contract.prop = newPropValue;

    this.model.set(contract);
  }
}

export interface Contract {
  prop: string;
}
