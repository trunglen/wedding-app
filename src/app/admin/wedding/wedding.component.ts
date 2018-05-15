import { Component, OnInit } from '@angular/core';
import { Wedding, WeddingService } from '../../xmodel/wedding.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { ListComponent } from '../../shared/list.component';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent extends ListComponent implements OnInit {
  weddings: Wedding[] = []
  filter = ''
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    public weddingService: WeddingService,
    private notificationService: ToastNotificationService
  ) { super() }

  ngOnInit() {
    this.weddingService.getWeddings().subscribe(res => {
      this.weddings = res
    })
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
