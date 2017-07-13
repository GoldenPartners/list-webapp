import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { EventsComponent } from "./events.component";

const eventsRoutes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'events', component: EventsComponent}
];

export const eventsRoutingProviders: any[] = [];
export const eventsRouting: ModuleWithProviders = RouterModule.forRoot(eventsRoutes);
