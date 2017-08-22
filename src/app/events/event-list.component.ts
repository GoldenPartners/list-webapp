import { Component, OnInit } from '@angular/core';
import { EventService } from "./event.service";
import { Event } from "./event";

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'event-list',
    templateUrl: './event-list.component.html',
    providers: [EventService]
})
export class EventListComponent implements OnInit {
  public title: String;
  public events: Array<Event>;
  public confirm_delete: string;
  public event: any;

  constructor(private eventService: EventService) {
    this.title = 'List of Events!';
    this.events = new Array<Event>();
    this.event = {};
  }

  ngOnInit() {
    $('.modal').modal();
    this.loadEvents();
  }

  private loadEvents(): void {
    // this.eventService.getUsers()
    //   .then(
    //     resp => { this.users = resp; },
    //     error => {console.error('An error occurred in dashboard component, navigating to login: ', error);}
    //   );
  }
}
