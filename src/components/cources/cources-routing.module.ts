import { Routes } from "@angular/router";
import { CourcesComponent } from "./index/cources.component";
import { CoursesDetailsComponent } from "./details/courses-details.component";
import { CheckOutComponent } from "./checkout/check-out.component";
import { CourcesSpecialtyComponent } from "./specialty/cources-specialty.component";

export const COURSES_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: CourcesComponent },
    { path: 'details/:id', component: CoursesDetailsComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: ':specialty', component: CourcesSpecialtyComponent },
  ]
}]

