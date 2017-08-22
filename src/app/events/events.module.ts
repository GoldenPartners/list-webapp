import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { eventsRouting, eventsRoutingProviders } from "./events.routing";

// Components
import { EventListComponent } from "./event-list.component";
import { EventFormComponent } from "./event-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    eventsRouting
  ],
  declarations: [
    EventListComponent,
    EventFormComponent
  ],
  providers: [eventsRoutingProviders]
})
export class EventsModule { }
