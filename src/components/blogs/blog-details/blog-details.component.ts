import { Component, OnInit } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogsService, BlogPost } from '../blogs.service';
import { FormsModule } from '@angular/forms';
import { SharedCardComponent } from '../../shared/card/shared-card.component';

export interface Comment {
  id: number;
  name: string;
  avatar: string;
  date: string;
  text: string;
  replies?: Comment[];
}

@Component({
  selector: 'app-blog-details',
  imports: [NxIcon, RouterModule, FormsModule, SharedCardComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements OnInit {
  post: BlogPost | undefined;
  related: BlogPost[] = [];

  // ── Comments ──────────────────────────────────────────────────────────
  readonly commentsPerPage = 3;
  commentsPage = 1;

  comments: Comment[] = [
    {
      id: 1,
      name: 'سارة العمري',
      avatar: 'assets/img/person-avatar-7.jpg',
      date: '03 أكتوبر 2025',
      text: 'مقال رائع ومفيد جداً! شرح واضح وأسلوب ممتاز. استفدت كثيراً من هذا المحتوى وأتطلع لقراءة المزيد من مقالاتكم القيمة.',
      replies: [
        {
          id: 11,
          name: 'أحمد خالد',
          avatar: 'assets/img/person-avatar-1.jpg',
          date: '04 أكتوبر 2025',
          text: 'أوافقك الرأي تماماً، المحتوى متميز والشرح واضح ومنظم بشكل احترافي.',
        }
      ]
    },
    {
      id: 2,
      name: 'محمد العبابنة',
      avatar: 'assets/img/person-avatar-4.jpg',
      date: '05 أكتوبر 2025',
      text: 'شكراً جزيلاً على هذا المقال القيم. الأفكار المطروحة عملية وقابلة للتطبيق الفوري في مشاريع حقيقية.',
    },
    {
      id: 3,
      name: 'نورة الجرادات',
      avatar: 'assets/img/person-avatar-9.jpg',
      date: '07 أكتوبر 2025',
      text: 'من أفضل المقالات التي قرأتها في هذا الموضوع. أسلوب الكتابة سلس والمعلومات دقيقة ومحدّثة.',
    },
    {
      id: 4,
      name: 'فهد القحطاني',
      avatar: 'assets/img/person-avatar-6.jpg',
      date: '09 أكتوبر 2025',
      text: 'محتوى متميز كما هو معتاد من هذه المنصة الرائعة. استمروا في هذا المستوى الراقي.',
    },
    {
      id: 5,
      name: 'لمياء الدرادكة',
      avatar: 'assets/img/person-avatar-8.jpg',
      date: '11 أكتوبر 2025',
      text: 'مقال يستحق القراءة وإعادة القراءة. أسلوب شيّق يجذب القارئ من البداية حتى النهاية.',
    },
    {
      id: 6,
      name: 'عبدالله هياجنة',
      avatar: 'assets/img/person-avatar-3.jpg',
      date: '13 أكتوبر 2025',
      text: 'نقاط عملية ومباشرة، لا حشو ولا تطويل. بالضبط نوع المحتوى الذي يبحث عنه المتعلم العربي.',
    },
  ];

  get totalPages(): number {
    return Math.ceil(this.comments.length / this.commentsPerPage);
  }

  get pagedComments(): Comment[] {
    const start = (this.commentsPage - 1) * this.commentsPerPage;
    return this.comments.slice(start, start + this.commentsPerPage);
  }

  get pageNums(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // ── Comment form ──────────────────────────────────────────────────────
  commentForm = { name: '', email: '', text: '', save: false };

  submitComment(): void {
    if (!this.commentForm.name || !this.commentForm.email || !this.commentForm.text) return;
    const newComment: Comment = {
      id: Date.now(),
      name: this.commentForm.name,
      avatar: 'assets/img/person-avatar-9.jpg',
      date: new Date().toLocaleDateString('ar-SA', { day: '2-digit', month: 'long', year: 'numeric' }),
      text: this.commentForm.text,
    };
    this.comments.unshift(newComment);
    this.commentsPage = 1;
    this.commentForm = { name: '', email: '', text: '', save: false };
  }

  constructor(private route: ActivatedRoute, private svc: BlogsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.post    = this.svc.getById(id);
      this.related = this.svc.getRelated(id);
    });
  }
}

