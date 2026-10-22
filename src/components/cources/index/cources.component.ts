import { Component } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterModule } from '@angular/router';
import { CoursesService, Course, Category } from '../courses.service';

@Component({
  selector: 'app-cources',
  imports: [NxIcon, RouterModule],
  templateUrl: './cources.component.html',
  styleUrl: './cources.component.scss'
})
export class CourcesComponent {

  readonly PAGE_SIZE = 3;

  categories: Category[];
  allCourses: Course[];

  // ── Page state per section ───────────────────────────────────────
  welcomePage     = 1;
  recommendedPage = 1;
  getAheadPage    = 1;
  personalDevPage = 1;
  alsoViewingPage = 1;

  constructor(private svc: CoursesService) {
    this.categories = svc.categories;
    this.allCourses = svc.allCourses;
  }

  // ── Source slices ────────────────────────────────────────────────
  get allAssigningCourses() { return this.allCourses; }
  get welcomeSource()       { return this.allCourses; }
  get recommendedSource()   { return this.allCourses.slice(0, 6); }
  get getAheadSource()      { return this.allCourses.slice(2, 8); }
  get personalDevSource()   { return this.allCourses.slice(3, 9); }
  get alsoViewingSource()   { return this.allCourses.slice(6, 12); }

  // ── Paginated views ──────────────────────────────────────────────
  get pagedWelcome()      { return this.paginate(this.welcomeSource,      this.welcomePage); }
  get pagedRecommended()  { return this.paginate(this.recommendedSource,  this.recommendedPage); }
  get pagedGetAhead()     { return this.paginate(this.getAheadSource,     this.getAheadPage); }
  get pagedPersonalDev()  { return this.paginate(this.personalDevSource,  this.personalDevPage); }
  get pagedAlsoViewing()  { return this.paginate(this.alsoViewingSource,  this.alsoViewingPage); }

  // ── Total pages per section ──────────────────────────────────────
  get totalWelcome()      { return this.totalPg(this.welcomeSource); }
  get totalRecommended()  { return this.totalPg(this.recommendedSource); }
  get totalGetAhead()     { return this.totalPg(this.getAheadSource); }
  get totalPersonalDev()  { return this.totalPg(this.personalDevSource); }
  get totalAlsoViewing()  { return this.totalPg(this.alsoViewingSource); }

  // ── Helpers ──────────────────────────────────────────────────────
  paginate(arr: Course[], page: number): Course[] {
    const start = (page - 1) * this.PAGE_SIZE;
    return arr.slice(start, start + this.PAGE_SIZE);
  }

  totalPg(arr: Course[]): number {
    return Math.ceil(arr.length / this.PAGE_SIZE);
  }

  pageNums(total: number): number[] {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
}
