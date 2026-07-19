import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CoursesService, Course } from '../courses.service';

@Component({
  selector: 'app-courses-details',
  imports: [RouterModule],
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.scss'
})
export class CoursesDetailsComponent implements OnInit {

  course: Course | undefined;
  relatedCourses: Course[] = [];

  // ── Pulled from course on navigation ───────────────────────────────
  get curriculum() { return this.course?.curriculum ?? []; }
  get reviews()    { return this.course?.reviews    ?? []; }
  get outcomes()   { return this.course?.outcomes   ?? []; }

  // ── Rating breakdown computed from course.rate ─────────────────────
  get ratingBreakdown() {
    const r = this.course?.rate ?? 0;
    const five  = Math.min(85, Math.round(r * 14 - 7));
    const four  = Math.min(30, Math.round((5 - r) * 10 + 10));
    const three = 7;
    const two   = 3;
    const one   = Math.max(0, 100 - five - four - three - two);
    return [
      { stars: 5, percent: five  },
      { stars: 4, percent: four  },
      { stars: 3, percent: three },
      { stars: 2, percent: two   },
      { stars: 1, percent: one   },
    ];
  }

  constructor(private route: ActivatedRoute, private svc: CoursesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.course = this.svc.getById(id);
      this.relatedCourses = this.svc.allCourses.filter(c => c.id !== id).slice(0, 3);
    });
  }

  get originalPrice(): number  { return this.course ? Math.round(this.course.price * 1.25) : 0; }
  get discountPercent(): number { return this.course ? Math.round((1 - this.course.price / this.originalPrice) * 100) : 0; }
  get fullStars(): number[]    { return Array(Math.floor(this.course?.rate ?? 0)).fill(0); }
  get hasHalfStar(): boolean   { return ((this.course?.rate ?? 0) % 1) >= 0.5; }
  get emptyStars(): number[]   {
    const full = Math.floor(this.course?.rate ?? 0);
    return Array(5 - full - (this.hasHalfStar ? 1 : 0)).fill(0);
  }
}

