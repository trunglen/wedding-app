import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeddingService, Wedding } from '../../../xmodel/wedding.service';

@Component({
  selector: 'app-wedding-detail',
  templateUrl: './wedding-detail.component.html',
  styleUrls: ['./wedding-detail.component.css']
})
export class WeddingDetailComponent implements OnInit {
  numberOfStudents: number[]
  wedding: Wedding
  students: any[]
  constructor(
    private activedRoute: ActivatedRoute,
    private weddingService: WeddingService
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(res => {
      this.weddingService.getWedding(res['id']).subscribe(res => {
        this.wedding = res
        this.numberOfStudents = Array(this.wedding.number_of_students).fill(null).map((x, i) => i)
        this.students = this.wedding.students
      })
    })
  }

}
