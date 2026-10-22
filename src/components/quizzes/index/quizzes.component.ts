import { Component, inject } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { RouterModule } from '@angular/router';
import { QuizzesService } from '../quizzes.service';

export interface QuizCard {
  id: number;
  title: string;
  category: string;
  questions: number;
  duration: number;   // minutes
  difficulty: string;
  gradClass: string;
}

@Component({
  selector: 'app-quizzes',
  imports: [NxIcon, RouterModule],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss'
})
export class QuizzesComponent {
  private quizzesService = inject(QuizzesService);
  allQuizzes = this.quizzesService.getAllQuizzes(); 


  difficultyClass(d: string): string {
    if (d === 'سهل')   return 'badge-easy';
    if (d === 'صعب')   return 'badge-hard';
    return 'badge-medium';
  }
}
