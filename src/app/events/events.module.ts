import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { eventsRouting, eventsRoutingProviders } from "./events.routing";

//Components
import { EventsComponent } from "./events.component";

@NgModule({
  imports: [
    CommonModule,
    eventsRouting
  ],
  declarations: [
    EventsComponent
  ],
  providers: [
    eventsRoutingProviders
  ]
})
export class EventsModule { }
