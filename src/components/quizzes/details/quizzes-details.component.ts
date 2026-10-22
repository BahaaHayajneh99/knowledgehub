import { Component, inject, OnInit } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuizzesService } from '../quizzes.service';
import { NgClass } from '@angular/common';
import { AuthService } from '../../guard/auth/auth.service';
import { CertificateModalComponent, CertData } from '../../profile/certificate-modal/certificate-modal.component';

export interface QuizOption  { id: number; text: string; }
export interface QuizQuestion {
  id: number;
  type: 'single' | 'multiple';
  text: string;
  options: QuizOption[];
}

@Component({
  selector: 'app-quizzes-details',
  imports: [NxIcon, RouterModule, NgClass, CertificateModalComponent],
  templateUrl: './quizzes-details.component.html',
  styleUrl: './quizzes-details.component.scss'
})
export class QuizzesDetailsComponent implements OnInit { 
  private activatedRoute = inject(ActivatedRoute);
  private quizeService = inject(QuizzesService);
  private authService = inject(AuthService);

  quizId:number = 0;
  categoryId:number = 0;
  isFinished = false;
  activeQuestion = 1;
  questions: any[] = []; 
  quiz:any; 
  remainingTime: number = 0;

  activeCert: CertData | null = null;
  certAutoPrint = false;
ngOnInit(): void {
  this.quizId = +this.activatedRoute.snapshot.params['id'];
  this.categoryId = +(this.activatedRoute.snapshot.queryParams['categoryId'] || 0); 
  this.loadQuestions();
}

private loadQuestions(): void {
  if (this.quizId <= 0) {
    return;
  }

  this.quiz = this.quizeService.getQuizById(this.quizId);

  if (this.categoryId > 0) {
    const category = this.quizeService.getQuestionsByCategoryQuizId(
      this.quizId,
      this.categoryId
    );

    if (category) {
      this.questions = category.questionList;
      return;
    }
  }

  this.questions = this.quiz?.questionList ?? [];
  this.remainingTime = this.quiz?.duration * 60; // Set remaining time to quiz duration in seconds
  this.startTimer(); // Start the countdown timer
}

   getQuizById() {
    return this.quizeService.getQuizById(this.quizId);
  }



  get questionNums(): number[] {
    return this.questions.map(q => q.id);
  }

  get passed(): boolean {
    return this.correctAnswers >= this.questions.length / 2;
  }

  get certData(): CertData {
    const today = new Date();
    const dateStr = today.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
    return {
      title: this.quiz?.title ?? 'اختبار',
      date: dateStr,
      instructor: 'منصة KnowledgeHub',
      id: `QUIZ-${this.quizId}-${today.getFullYear()}`,
      studentName: this.authService.getCurrentUser()?.fullName ?? ''
    };
  }

  viewQuizCertificate(): void {
    this.certAutoPrint = false;
    this.activeCert = this.certData;
  }

  downloadQuizCertificate(): void {
    this.certAutoPrint = true;
    this.activeCert = this.certData;
  }

  closeCertModal(): void {
    this.activeCert = null;
    this.certAutoPrint = false;
  }

  submitQuiz(): void {
    this.isFinished = true;
  }

  onAnswerChoosed(event: any, optionId: number, option: any, question: any): void {
    const selectedQuestion = question;
    const checkIfValidAnswer = optionId === selectedQuestion?.optionAnswerId; 
    option.isCorrect = checkIfValidAnswer;
    question.isAnswered = true;
    question.isAnsweredCorrectly = checkIfValidAnswer;
    option.isSelected = event.target.checked;
  }

  get correctAnswers(): number {
    return this.questions.filter(q => q.isAnsweredCorrectly).length;
  }

  get incorrectAnswers(): number {
    return this.questions.filter(q => q.isAnswered && !q.isAnsweredCorrectly).length;
  }


  checkIfAnsweredIncorrectly(questionId: number): boolean {
    const question = this.questions.find(q => q.id === questionId);
    return question ? question.isAnswered && !question.isAnsweredCorrectly : false;
  }

  checkIfAnsweredCorrectly(questionId: number): boolean {
    const question = this.questions.find(q => q.id === questionId);
    return question ? question.isAnsweredCorrectly : false;
  }

 get getDurationMinuteSecond(): number { 

//duration = 30 mins
//second = 30 * 60 = 1800
//remainingSeconds = 1800 % 60 = 0
if (this.quiz.duration <= 0) {
  return 0;
} 
  //  this.quiz.duration = this.quiz.duration; // 1800 
 //  this.quiz.duration = this.quiz.duration * 60; // 1800
    // const  second = this.quiz.duration * 60; // 177 
    // const minutes = Math.floor(second / 60); // 2
    // const remainingSeconds = second % 60; // 57
    while (this.quiz.duration > 0) {
      setTimeout(() => {
        this.quiz.duration = (this.quiz.duration*60) - 1;
      }, 1000);
    }
   return this.quiz.duration;


  }


  startTimer(): void {
    const timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(timerInterval);
        this.submitQuiz(); // Automatically submit the quiz when time runs out
      }
    }, 1000);
  }

  get durationDisplay(): string {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
