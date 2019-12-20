import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { BoxChoiceComponent } from "./pages/box-choice/box-choice.component";
import { BuilderComponent } from './pages/builder/builder.component';

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  { path: "box-choice", component: BoxChoiceComponent },
  { path: "box-choice/:type", component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
