import { Pipe, PipeTransform } from '@angular/core';

/**
 * Splits a list into pages for <nx-carousel>, which shows one slide at a time.
 * Each page holds as many items as fit the viewport, matching the breakpoints
 * previously used with PrimeNG's carousel.
 *
 *   @for (page of items | carouselPages : 3 : viewportWidth(); track $index) { ... }
 */
@Pipe({ name: 'carouselPages' })
export class CarouselPagesPipe implements PipeTransform {

  transform<T>(items: T[] | null | undefined, maxPerPage: number, viewportWidth: number): T[][] {
    if (!items?.length) return [];

    let perPage = maxPerPage;
    if (viewportWidth <= 767) perPage = 1;
    else if (viewportWidth <= 1199) perPage = Math.min(maxPerPage, 2);

    const pages: T[][] = [];
    for (let i = 0; i < items.length; i += perPage) {
      pages.push(items.slice(i, i + perPage));
    }
    return pages;
  }
}
