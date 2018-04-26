import { Component, OnInit } from '@angular/core';
import { Wedding, WeddingService } from '../../xmodel/wedding.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    public weddingService: WeddingService,
    private notificationService: ToastNotificationService
  ) { }

  ngOnInit() {
  }

  onDetail(w: Wedding) {
    this.router.navigate([`detail/${w.id}`], { relativeTo: this.activedRoute })
  }

  onEdit(w: Wedding) {
    this.router.navigate([`edit/${w.id}`], { relativeTo: this.activedRoute })
  }

  onDelete(id: string) {
    this.notificationService.confirm("Bạn có chắc muốn xóa").subscribe(yes => {
      this.weddingService.deleteWedding(id).subscribe(res => {
        this.notificationService.success('Đã xóa thành công')
      })
    })
  }
}
