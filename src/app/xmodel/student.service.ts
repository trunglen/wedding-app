import { Injectable } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';
import { Observable } from 'rxjs/Observable';

const initialData: Student = { prop: 'value' };

@Injectable()
export class StudentService {
  private model: Model<Student>;

  student$: Observable<Student>;

  constructor(private modelFactory: ModelFactory<Student>) {
    this.model = this.modelFactory.create(initialData);
    this.student$ = this.model.data$;
  }

  updateProp(newPropValue: string) {
    const student = this.model.get();

    student.prop = newPropValue;

    this.model.set(student);
  }
}

export interface Student {
  prop: string;
}
