import { Component, OnInit } from '@angular/core';
import { WeddingService, Wedding } from '../../../xmodel/wedding.service';
import { ListComponent } from '../../../shared/list.component';

@Component({
  selector: 'app-wedding-history',
  templateUrl: './wedding-history.component.html',
  styleUrls: ['./wedding-history.component.css']
})
export class WeddingHistoryComponent extends ListComponent implements OnInit {

  weddings: Wedding[] = []
  constructor(
    public weddingService: WeddingService,
  ) { super() }

  ngOnInit() {
    this.weddingService.getWeddings('finish').subscribe(res => {
      this.weddings = res
    })
  }

}
