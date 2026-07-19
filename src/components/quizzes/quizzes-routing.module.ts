import { Routes } from '@angular/router';
import { QuizzesComponent } from './index/quizzes.component';
import { QuizzesDetailsComponent } from './details/quizzes-details.component';
import { QuizzesCategoriesComponent } from './quizzes-cateogry/quizzes-categories.component';

export const QUIZZES_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '',          component: QuizzesComponent },
    { path: 'details/:id', component: QuizzesDetailsComponent },
    { path: 'categories/:id', component: QuizzesCategoriesComponent },
  ]
}];

