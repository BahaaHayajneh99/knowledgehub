import { Routes } from '@angular/router';
import { PathsComponent } from './index/paths.component';
import { PathDetailsComponent } from './details/path-details.component';

export const PATHS_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PathsComponent },
      { path: ':slug', component: PathDetailsComponent },
    ],
  },
];
