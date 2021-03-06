import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./core/dashboard/dashboard.component";
import { LoginComponent } from "./core/login/login.component";
import { NgModule } from "@angular/core";
import { FlightsComponent } from "./flights/flights.component";
import { EditFlightComponent } from "./flights/edit-flight/edit-flight.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "flights", pathMatch: "full" },
      { path: "flights", component: FlightsComponent },
      { path: "flights/:key", component: EditFlightComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
