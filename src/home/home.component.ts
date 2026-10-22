import { Component, inject, OnInit, AfterViewInit, OnDestroy, ElementRef, HostListener, signal } from '@angular/core';
import { NxCarousel, NxCarouselSlideDirective, NxIcon } from 'nexium-ui';

import { RouterLink } from '@angular/router';
import { BlogPost, BlogsService } from '../components/blogs/blogs.service';
import { SharedCardComponent } from '../components/shared/card/shared-card.component';
import { CarouselPagesPipe } from '../components/shared/carousel/carousel-pages.pipe';

@Component({
  selector: 'app-home',
  imports: [NxIcon, NxCarousel, NxCarouselSlideDirective, CarouselPagesPipe, RouterLink, SharedCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private blogService = inject(BlogsService);
  private hostEl      = inject(ElementRef);
  private observer!: IntersectionObserver;
  allBlogs: BlogPost[] = [];

  // Drives how many cards each carousel page holds (see CarouselPagesPipe)
  viewportWidth = signal(window.innerWidth);

  @HostListener('window:resize')
  onResize(): void {
    this.viewportWidth.set(window.innerWidth);
  }

  coursesCount = 0;
  courcesNumber = 500;

  expertsCount = 0;
  expertsNumber = 120;
  studentsCount = 0;
  studentsNumber = 18000;
  specializationsCount = 0;
  specializationsNumber = 25;

  

  ngOnInit(): void {
    this.allBlogs = this.blogService.allPosts.slice(0, 3);
    this.setIntervalCounters();
  }

  ngAfterViewInit(): void {
    this.initRevealAnimations();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initRevealAnimations(): void {
    const root = this.hostEl.nativeElement as HTMLElement;
    const targets = root.querySelectorAll<Element>(
      'section:not(.hp-intro)'
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(el => this.observer.observe(el));
  }

  private setIntervalCounters(): void {
    const intervalId = setInterval(() => {
      if(this.coursesCount < this.courcesNumber) {
        this.coursesCount+=5;
      }
      if(this.expertsCount < this.expertsNumber) {
        this.expertsCount+=3;
      }
      if(this.studentsCount < this.studentsNumber) {
        this.studentsCount+=250;
      }
      if(this.specializationsCount < this.specializationsNumber) {
        this.specializationsCount++;
      }
      if(this.coursesCount >= this.courcesNumber && this.expertsCount >= this.expertsNumber && this.studentsCount >= this.studentsNumber && this.specializationsCount >= this.specializationsNumber) {
        clearInterval(intervalId);
      }
    }, 100);
  }



  allCources = [{
    id: 1,
    category: 'تطوير الويب',
    title: ' تطبيقات الويب بـ Angular',
    description: 'تعلم كيفية بناء تطبيقات ويب ديناميكية باستخدام إطار عمل Angular، من الأساسيات إلى المفاهيم المتقدمة.',
    image: '../assets/img/angular-course.jpg',
    numberOfLessons: 42,
    rate: 4.5,
    author: 'أحمد علي',
    price: 199.99,
    routerLink: '/courses/',
    personAvatar: '../assets/img/person-avatar-1.jpg'
  },
  {
    id: 2,
    category: 'تطوير الويب',
    title: 'تطوير تطبيقات الويب بـ React',
    description: 'تعلم كيفية بناء تطبيقات ويب تفاعلية باستخدام مكتبة React، من الأساسيات إلى المفاهيم المتقدمة.',
    image: '../assets/img/react-course.jpg',
    numberOfLessons: 38,
    rate: 4.7,
    author: 'محمد حسن',
    price: 149.99,
    routerLink: '/courses/',
    personAvatar: '../assets/img/person-avatar-4.jpg'
  }, {
    id: 3,
    category: 'تطوير الويب',
    title: 'تطوير تطبيقات الويب بـ Vue.js',
    description: 'تعلم كيفية بناء تطبيقات ويب تفاعلية باستخدام إطار عمل Vue.js، من الأساسيات إلى المفاهيم المتقدمة.',
    image: '../assets/img/vue-course.jpg',
    numberOfLessons: 40,
    rate: 4.6,
    author: 'محمد أحمد',
    price: 129.99,
    routerLink: '/courses/',
    personAvatar: '../assets/img/person-avatar-3.jpg'
  }
  ]

  allTestimonials = [
    {
      id: 1,
      name: 'أحمد علي',
      title: 'مطور ويب',
      avatar: '../assets/img/person-avatar-5.jpg',
      testimonial: 'KnowledgeHub هو أفضل منصة تعلمت منها الكثير. الدورات كانت شاملة وسهلة الفهم.',
      rate: 5
    },
    {
      id: 2,
      name: 'سارة محمد',
      title: 'مصممة واجهات المستخدم',
      avatar: '../assets/img/person-avatar-7.jpg',
      testimonial: 'لقد ساعدتني KnowledgeHub على تحسين مهاراتي في تصميم واجهات المستخدم بشكل كبير.',
      rate: 4.5
    },
    {
      id: 3,
      name: 'محمد حسن',
      title: 'محلل بيانات',
      avatar: '../assets/img/person-avatar-6.jpg',
      testimonial: 'الوصول مدى الحياة للمحتوى يميّز KnowledgeHub عن غيرها. أعود للمراجعة في أي وقت وأجد التحديثات الجديدة دائماً.',
      rate: 5
    }]


  getFullStars(rate: number): number[] {
    return Array(Math.floor(rate));
  }

  hasHalfStar(rate: number): boolean {
    return rate % 1 !== 0;
  }

  getEmptyStars(rate: number): number[] {
    return Array(5 - Math.ceil(rate));
  }
}
