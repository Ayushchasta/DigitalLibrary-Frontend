import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusScreenComponent } from "./components/aboutus-screen/aboutus-screen.component";
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";

const routes: Routes = [
  {
    path: "",
    component: HomeScreenComponent,
  },
  {
    path: "about",
    component: AboutusScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
