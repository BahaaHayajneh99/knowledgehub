import { Component, OnInit } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuizzesService, QuizCard } from '../quizzes.service';

@Component({
  selector: 'app-quizzes-categories',
  imports: [NxIcon, RouterModule],
  templateUrl: './quizzes-categories.component.html',
  styleUrl: './quizzes-categories.component.scss'
})
export class QuizzesCategoriesComponent implements OnInit {

  quiz: QuizCard | undefined;

  // Gradient classes cycle for category cards
  private gradients = [
    'card-img--grad-1', 'card-img--grad-2', 'card-img--grad-3',
    'card-img--grad-4', 'card-img--grad-5', 'card-img--grad-6',
    'card-img--grad-7', 'card-img--grad-8', 'card-img--grad-9',
    'card-img--grad-10',
  ];

  gradFor(index: number): string {
    return this.gradients[index % this.gradients.length];
  }

  constructor(private route: ActivatedRoute, private svc: QuizzesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.quiz = this.svc.getQuizById(id);
    });
  }
}
