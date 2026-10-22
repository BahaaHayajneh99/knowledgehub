import { Component, OnInit } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { PathsService, LearningPath } from '../paths.service';

@Component({
  selector: 'app-path-details',
  imports: [NxIcon, RouterModule, NgClass],
  templateUrl: './path-details.component.html',
  styleUrl: './path-details.component.scss',
})
export class PathDetailsComponent implements OnInit {
  path: LearningPath | undefined;

  constructor(
    private route: ActivatedRoute,
    private svc: PathsService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.path = this.svc.getBySlug(slug);
    });
  }
}
