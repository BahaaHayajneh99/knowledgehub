import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COURSES_ROUTES } from './cources-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(COURSES_ROUTES)
  ]
})
export class CourcesModule { }
