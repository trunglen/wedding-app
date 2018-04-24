import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wedding-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  @Input() color: string
  constructor() { }

  ngOnInit() {
  }

}
