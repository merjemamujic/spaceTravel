import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home/home.component";
import { DestinationComponent } from "./destination/destination/destination.component";
import { CrewComponent } from "./crew/crew/crew.component";
import { TechnologyComponent } from "./technology/technology/technology.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "destination", component: DestinationComponent },
  { path: "crew", component: CrewComponent },
  { path: "technology", component: TechnologyComponent },
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
