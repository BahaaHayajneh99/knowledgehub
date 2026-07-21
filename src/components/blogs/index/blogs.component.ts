import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { BlogsService, BlogPost } from '../blogs.service';
import { SharedCardComponent } from '../../shared/card/shared-card.component';

@Component({
  selector: 'app-blogs',
  imports: [RouterModule, CarouselModule, SharedCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  readonly PAGE_SIZE = 3;

  allPosts: BlogPost[];

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px',  numVisible: 1, numScroll: 1 },
  ];

  // ── Pagination state (articles section only) ─────────────────────────
  articlesPage = 1;

  constructor(private svc: BlogsService) {
    this.allPosts = svc.allPosts;
  }

  get featured()  { return this.allPosts[0]; }
  get trending()  { return this.allPosts.slice(0, 5); }
  get related()   { return this.allPosts.slice(0, 2); }

  // ── Articles pagination ───────────────────────────────────────────
  get articlesSource() { return this.allPosts; }
  get pagedArticles()  { return this.paginate(this.articlesSource, this.articlesPage); }
  get totalArticles()  { return Math.ceil(this.articlesSource.length / this.PAGE_SIZE); }

  paginate(arr: BlogPost[], page: number): BlogPost[] {
    const start = (page - 1) * this.PAGE_SIZE;
    return arr.slice(start, start + this.PAGE_SIZE);
  }

  pageNums(total: number): number[] {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
}
