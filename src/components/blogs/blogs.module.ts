import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BLOGS_ROUTES } from './blogs-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BLOGS_ROUTES)
  ]
})
export class BlogsModule { }
