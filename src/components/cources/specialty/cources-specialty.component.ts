import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { CoursesService, Course, Specialty } from '../courses.service';
import { SharedCardComponent } from '../../shared/card/shared-card.component';

@Component({
  selector: 'app-cources-specialty',
  imports: [RouterModule, NgClass, SharedCardComponent],
  templateUrl: './cources-specialty.component.html',
  styleUrl: './cources-specialty.component.scss',
})
export class CourcesSpecialtyComponent implements OnInit {
  specialty: Specialty | undefined;
  courses: Course[] = [];

  readonly PAGE_SIZE = 6;
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    public svc: CoursesService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('specialty') ?? '';
      this.specialty = this.svc.specialties.find(s => s.slug === slug);
      this.currentPage = 1;

      if (this.specialty) {
        const names = this.specialty.categoryNames;
        this.courses = this.svc.allCourses.filter(c => names.includes(c.category));
        // fall back to all courses if category data doesn't match yet
        if (this.courses.length === 0) {
          this.courses = [...this.svc.allCourses];
        }
      } else {
        this.courses = [];
      }
    });
  }

  get pagedCourses(): Course[] {
    const start = (this.currentPage - 1) * this.PAGE_SIZE;
    return this.courses.slice(start, start + this.PAGE_SIZE);
  }

  get totalPages(): number {
    return Math.ceil(this.courses.length / this.PAGE_SIZE);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number): void {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
