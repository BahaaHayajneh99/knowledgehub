import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {

  faqs: FaqItem[] = [
    {
      question: 'هل تقدمون دعماً للطلاب؟',
      answer: 'شارك في ندواتنا وورش عملنا المباشرة التي يقدمها خبراء في المجال. تغطي هذه الجلسات موضوعات متقدمة وتوفر تجارب عملية وتقدم فرصاً للتفاعل المباشر مع المدربين.',
      open: true
    },
    {
      question: 'كيف يمكنني تحديث معلومات ملفي الشخصي؟',
      answer: 'يمكنك تحديث معلومات ملفك الشخصي من خلال الانتقال إلى صفحة الإعدادات في حسابك. ابحث عن قسم "الملف الشخصي" وقم بتعديل البيانات المطلوبة ثم احفظ التغييرات.',
      open: false
    },
    {
      question: 'هل تقدمون دعماً للطلاب؟',
      answer: 'نعم، نقدم دعماً شاملاً للطلاب عبر قنوات متعددة منها الدردشة المباشرة والبريد الإلكتروني ومنتدى المجتمع.',
      open: false
    },
    {
      question: 'ما هي فائدة الدورات؟',
      answer: 'تمنحك دوراتنا مهارات عملية قابلة للتطبيق الفوري في سوق العمل، بالإضافة إلى شهادات معتمدة تعزز من مسيرتك المهنية.',
      open: false
    },
    {
      question: 'ما هي سياسة الاسترداد لديكم؟',
      answer: 'نوفر ضماناً لاسترداد المبلغ خلال 30 يوماً من تاريخ الشراء إذا لم تكن راضياً عن الدورة. يُرجى التواصل مع فريق الدعم لمعالجة طلبك.',
      open: false
    },
    {
      question: 'كيف يمكنني التسجيل في دورة؟',
      answer: 'للتسجيل في دورة، تصفح كتالوج الدورات، اختر الدورة التي تناسبك، ثم انقر على "سجّل الآن" واتبع خطوات الدفع البسيطة.',
      open: false
    }
  ];

  toggle(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  subscribe(email: string): void {
    // subscription logic placeholder
    console.log('Subscribe:', email);
  }
}
