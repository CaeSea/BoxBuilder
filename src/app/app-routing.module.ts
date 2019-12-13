import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { BuilderComponent } from "./components/builder/builder.component";

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  { path: "builder", component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
