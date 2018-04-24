import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CircleComponent
  ],
  declarations: [CircleComponent]
})
export class SharedModule { }
