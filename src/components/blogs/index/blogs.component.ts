import { Component, HostListener, signal } from '@angular/core';
import { NxCarousel, NxCarouselSlideDirective } from 'nexium-ui';
import { RouterModule } from '@angular/router';
import { BlogsService, BlogPost } from '../blogs.service';
import { SharedCardComponent } from '../../shared/card/shared-card.component';
import { CarouselPagesPipe } from '../../shared/carousel/carousel-pages.pipe';

@Component({
  selector: 'app-blogs',
  imports: [RouterModule, NxCarousel, NxCarouselSlideDirective, CarouselPagesPipe, SharedCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  readonly PAGE_SIZE = 3;

  allPosts: BlogPost[];

  // Drives how many cards each carousel page holds (see CarouselPagesPipe)
  viewportWidth = signal(window.innerWidth);

  @HostListener('window:resize')
  onResize(): void {
    this.viewportWidth.set(window.innerWidth);
  }

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
