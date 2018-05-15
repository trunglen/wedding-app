import { Component, OnInit, Input } from '@angular/core';

const warningLimit = 2 * 24 * 3600 * 1000
@Component({
  selector: 'app-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrls: ['./time-counter.component.css']
})
export class TimeCounterComponent implements OnInit {

  @Input() pastTime: number
  highlight = ''
  time: string
  constructor() { }

  ngOnInit() {
    if (this.pastTime - new Date().getTime() < warningLimit) {
      this.highlight = 'highlight'
    }
    setInterval(() => {
      this.time = this.msToTime(this.pastTime - new Date().getTime())
    }, 1000)
  }

  msToTime(duration: number) {
    if (duration < 0) {
      return '00 : 00 : 00'
    }

    var day = parseInt(duration / 86400000 + '')
    duration = duration - day * 86400000
    var milliseconds = parseInt((duration % 1000) / 100 + '')
    var secondsN = parseInt((duration / 1000) % 60 + '')
    var minutesN = parseInt((duration / (1000 * 60)) % 60 + '')
    var hoursN = parseInt((duration / (1000 * 60 * 60)) % 24 + '');

    var hours = (hoursN < 10) ? "0" + hoursN : hoursN + '';
    var minutes = (minutesN < 10) ? "0" + minutesN : minutesN;
    var seconds = (secondsN < 10) ? "0" + secondsN : secondsN + '';
    return day + ' ngày ' + hours + ":" + minutes + ":" + seconds;
  }
}
