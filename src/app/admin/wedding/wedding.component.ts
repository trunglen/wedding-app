import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WeddingService, Wedding } from '../../xmodel/wedding.service';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private toastService: ToastNotificationService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.defaultDate.setHours(9)
    this.defaultDate.setMinutes(0)
    this.form = this.fb.group({
      'name': new FormControl(''),
      'number_of_students': new FormControl(14),
      'htime': new FormControl(this.defaultDate),
      'phone': new FormControl(),
      'address': this.fb.group({
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

  onDetail(w: Wedding) {
    console.log(w)
    this.router.navigate([`detail/${w.id}`], { relativeTo: this.activedRoute })
  }
}
