import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { EventListComponent } from "./event-list.component";
import { EventFormComponent } from "./event-form.component";

const eventsRoutes: Routes = [
  {path: '', component: EventListComponent},
  {path: 'add', component: EventFormComponent},
  {path: 'edit/:id', component: EventFormComponent}
];

export const eventsRoutingProviders: any[] = [];
export const eventsRouting: ModuleWithProviders = RouterModule.forChild(eventsRoutes);
