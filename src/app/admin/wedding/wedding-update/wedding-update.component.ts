import { Component, OnInit, ViewChild } from '@angular/core';
import { Wedding, WeddingService } from '../../../xmodel/wedding.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastNotificationService } from '../../../../x/http/toast-notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wedding-update',
  templateUrl: './wedding-update.component.html',
  styleUrls: ['./wedding-update.component.css']
})
export class WeddingUpdateComponent implements OnInit {
  defaultDate = new Date()
  form: FormGroup = new FormGroup({})
  @ViewChild('f') f: NgForm
  wedding: Wedding = <Wedding>{ address: {} }
  constructor(
    private fb: FormBuilder,
    private weddingService: WeddingService,
    private toastService: ToastNotificationService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(param => {
      this.weddingService.getWedding(param.id).subscribe((res) => {
        this.defaultDate = new Date(res.htime)
        this.wedding = res
      })
    })
  }

  onSave() {
    this.wedding.htime = this.defaultDate.getTime()
    this.weddingService.updateWedding(this.wedding).subscribe(res => {
      this.toastService.success('Cập nhật thành công')
      this.router.navigate(["../../"], { relativeTo: this.activedRoute })
    })
  }

}
