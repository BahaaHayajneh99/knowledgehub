import { Component } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { PathsService, LearningPath } from '../paths.service';

@Component({
  selector: 'app-paths',
  imports: [NxIcon, RouterModule, NgClass],
  templateUrl: './paths.component.html',
  styleUrl: './paths.component.scss',
})
export class PathsComponent {
  paths: LearningPath[];

  constructor(private svc: PathsService) {
    this.paths = svc.getAll();
  }
}
