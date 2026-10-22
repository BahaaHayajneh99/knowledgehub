import { Component, Input } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shared-card',
  imports: [NxIcon, RouterLink],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss'
})
export class SharedCardComponent {
  /** Card image URL */
  @Input() image = '';
  /** Card title */
  @Input() title = '';
  /** Badge text */
  @Input() category = '';
  /** RouterLink array, e.g. ['/courses/details', id] */
  @Input() detailRoute: any[] = [];
  /** Author / instructor name */
  @Input() author = '';
  /** Author avatar URL */
  @Input() authorAvatar = '';
  /** Star rating – when set, shows rating + lessons meta line */
  @Input() rate: number | null = null;
  /** Number of lessons (paired with rate) */
  @Input() lessons: number | null = null;
  /** Read time in minutes – when set, shows clock + date meta line */
  @Input() readTime: number | null = null;
  /** Date string – shown in footer when readTime is null, or in meta line when readTime is set */
  @Input() date = '';
  /** Price – shown in footer when provided */
  @Input() price: number | string | null = null;
  /** Currency label appended to price */
  @Input() currency = 'DJ';
  /** Whether to show the detail link in footer */
  @Input() showDetailLink = true;
  /** CTA link text */
  @Input() actionLabel = 'عرض التفاصيل';
}
