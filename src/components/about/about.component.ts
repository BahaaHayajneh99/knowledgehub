import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  stats = [
    { icon: 'pi-graduation-cap', value: '500+', label: 'دورة تدريبية' },
    { icon: 'pi-users',          value: '18k+', label: 'طالب مسجّل' },
    { icon: 'pi-star',           value: '120+', label: 'مدرّب خبير' },
    { icon: 'pi-verified',       value: '25',   label: 'تخصصاً متاحاً' },
  ];

  values = [
    {
      icon: 'pi-lightbulb',
      title: 'الابتكار',
      desc: 'نسعى دائماً لتقديم أساليب تعليمية مبتكرة تواكب أحدث التقنيات وتلبي احتياجات المتعلم العصري.'
    },
    {
      icon: 'pi-shield',
      title: 'الجودة',
      desc: 'نلتزم بأعلى معايير الجودة في المحتوى التعليمي من خلال مراجعة دقيقة ومستمرة من قِبل متخصصين.'
    },
    {
      icon: 'pi-heart',
      title: 'الشمولية',
      desc: 'نؤمن بأن التعليم حق للجميع، لذا نوفر محتوى ميسور التكلفة يصل إلى كل متعلم عربي في العالم.'
    },
    {
      icon: 'pi-users',
      title: 'المجتمع',
      desc: 'نبني مجتمعاً تعليمياً داعماً يتيح للطلاب التواصل والتعاون وتبادل الخبرات والمعرفة.'
    },
  ];

  team = [
    {
      name: 'أحمد المنصوري',
      role: 'المؤسس والرئيس التنفيذي',
      bio: 'خبرة أكثر من 15 عاماً في التعليم الإلكتروني وتطوير المحتوى الرقمي.',
      avatar: 'assets/img/person-avatar-1.jpg',
    },
    {
      name: 'سارة الزهراني',
      role: 'مديرة المحتوى',
      bio: 'متخصصة في تصميم المناهج التعليمية وتطوير تجارب التعلم التفاعلية.',
      avatar: 'assets/img/person-avatar-8.jpg',
    },
    {
      name: 'خالد العمري',
      role: 'مدير التقنية',
      bio: 'مهندس برمجيات بخبرة 12 عاماً في بناء منصات التعلم الإلكتروني.',
      avatar: 'assets/img/person-avatar-2.jpg',
    },
    {
      name: 'نورة الشمري',
      role: 'مديرة تجربة المستخدم',
      bio: 'مصممة متخصصة في تحسين تجربة المستخدم وجعل التعلم ممتعاً وسلساً.',
      avatar: 'assets/img/person-avatar-9.jpg',
    },
  ];
}
