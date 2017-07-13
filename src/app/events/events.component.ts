import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  public msg: string;

  constructor () {
    this.msg = 'Hola Events!';
  }

  ngOnInit() {
    console.log('Init events!');
  }
}
