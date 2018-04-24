import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WeddingService } from '../../xmodel/wedding.service';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  defaultDate = new Date()
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private weddingService: WeddingService,
    private toastService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.defaultDate.setHours(9)
    this.defaultDate.setMinutes(0)
    this.form = this.fb.group({
      name: new FormControl(''),
      htime: new FormControl(this.defaultDate),
      phone: new FormControl(),
      address: this.fb.group({
        'home_number': new FormControl(),
        'street': new FormControl(),
        'district': new FormControl()
      })
    })
  }

  onCreateWedding() {
    const value = this.form.value
    this.weddingService.addWedding(value).subscribe(res => {
      this.toastService.success('Thêm đám cưới thành công')
    })
  }
}
