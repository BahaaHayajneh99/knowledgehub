import { Injectable } from '@angular/core';

export interface CourseChapter {
  title: string;
  lessons: number;
  duration: string;
}

export interface CourseReview {
  name: string;
  rate: number;
  date: string;
  comment: string;
  personAvatar: string;
}

export interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  numberOfLessons: number;
  rate: number;
  rateCount: number;
  author: string;
  price: number;
  gradClass: string;
  personAvatar: string;
  outcomes: string[];
  curriculum: CourseChapter[];
  reviews: CourseReview[];
}

export interface Category {
  icon: string;
  name: string;
  count: number;
  color: string;
  bg: string;
  route: string;
}

export interface Specialty {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorClass: string;
  categoryNames: string[];
  totalCount: number;
}

@Injectable({ providedIn: 'root' })
export class CoursesService {

  specialties: Specialty[] = [
    {
      slug: 'tech',
      title: 'تطوير البرمجيات',
      subtitle: 'احترف بناء التطبيقات والمواقع والأنظمة البرمجية الحديثة',
      description: 'اكتشف مجموعة شاملة من الدورات في تطوير الويب والتطبيقات المحمولة وبرمجة الخوادم. من HTML وCSS إلى Angular وNode.js وReact Native، نوفر لك كل ما تحتاجه لتصبح مطوراً محترفاً يصنع فارقاً في سوق العمل.',
      icon: 'pi-desktop',
      colorClass: 'sp-color--tech',
      categoryNames: ['تطوير الويب', 'تطوير الموبايل'],
      totalCount: 142,
    },
    {
      slug: 'design',
      title: 'التصميم الإبداعي',
      subtitle: 'أطلق إبداعك واحترف فنون التصميم الرقمي الحديث',
      description: 'دورات متخصصة في تصميم واجهات المستخدم وتجربة المستخدم والتصوير الفوتوغرافي والجرافيك. تعلّم أدوات Figma وPhotoshop وIllustrator لتبدع في عالم التصميم وتبني مشاريع بصرية مميزة.',
      icon: 'pi-palette',
      colorClass: 'sp-color--design',
      categoryNames: ['تصميم', 'تصوير'],
      totalCount: 87,
    },
    {
      slug: 'business',
      title: 'الأعمال والإدارة',
      subtitle: 'طوّر مهاراتك في ريادة الأعمال وقُد فريقك نحو النجاح',
      description: 'دورات ومسارات متخصصة في إدارة الأعمال وريادة المشاريع والقيادة والتفاوض. اكتسب الأدوات الفكرية والمهارات العملية اللازمة للتفوق في بيئة الأعمال التنافسية وبناء مشروعك الناجح.',
      icon: 'pi-briefcase',
      colorClass: 'sp-color--business',
      categoryNames: ['أعمال وإدارة'],
      totalCount: 64,
    },
    {
      slug: 'data',
      title: 'علم البيانات',
      subtitle: 'حوّل البيانات الخام إلى رؤى استراتيجية قابلة للتطبيق',
      description: 'دورات متكاملة تغطي تحليل البيانات والتعلم الآلي والذكاء الاصطناعي والإحصاء التطبيقي. أتقن Python وأدوات Pandas وTensorFlow واجعل من الأرقام قصصاً مؤثرة تُحرّك قرارات الأعمال.',
      icon: 'pi-chart-bar',
      colorClass: 'sp-color--data',
      categoryNames: ['علم البيانات'],
      totalCount: 53,
    },
    {
      slug: 'marketing',
      title: 'التسويق الرقمي',
      subtitle: 'أتقن فنون التسويق الرقمي وابنِ حضوراً قوياً عبر الإنترنت',
      description: 'تعلّم استراتيجيات التسويق الرقمي عبر وسائل التواصل الاجتماعي ومحركات البحث والبريد الإلكتروني والإعلانات المدفوعة. من SEO إلى Google Ads، أتقن الأدوات التي تحوّل الزوار إلى عملاء وتُنمي علامتك التجارية.',
      icon: 'pi-megaphone',
      colorClass: 'sp-color--marketing',
      categoryNames: ['تسويق رقمي'],
      totalCount: 48,
    },
    {
      slug: 'lang',
      title: 'اللغات',
      subtitle: 'تعلّم لغة جديدة وافتح أبواباً لا حصر لها من الفرص',
      description: 'دورات تعليمية في اللغات الأكثر طلباً في سوق العمل العالمي. من الإنجليزية والفرنسية إلى الصينية والإسبانية، نقدم محتوى يجعل تعلّم اللغات تجربة ممتعة وفعّالة تفتح أمامك آفاق جديدة.',
      icon: 'pi-language',
      colorClass: 'sp-color--lang',
      categoryNames: ['لغات'],
      totalCount: 39,
    },
  ];

  categories: Category[] = [
    { icon: 'pi-palette',   name: 'تصميم',          count: 87,  color: '#667eea', bg: 'rgba(102,126,234,0.12)', route: '/courses' },
    { icon: 'pi-code',      name: 'تطوير الويب',     count: 142, color: '#4DD9CF', bg: 'rgba(77,217,207,0.12)',  route: '/courses' },
    { icon: 'pi-mobile',    name: 'تطوير الموبايل',  count: 64,  color: '#43e97b', bg: 'rgba(67,233,123,0.12)',  route: '/courses' },
    { icon: 'pi-briefcase', name: 'أعمال وإدارة',    count: 53,  color: '#f7971e', bg: 'rgba(247,151,30,0.12)',  route: '/courses' },
    { icon: 'pi-megaphone', name: 'تسويق رقمي',      count: 48,  color: '#f5576c', bg: 'rgba(245,87,108,0.12)',  route: '/courses' },
    { icon: 'pi-camera',    name: 'تصوير',           count: 31,  color: '#a855f7', bg: 'rgba(168,85,247,0.12)',  route: '/courses' },
    { icon: 'pi-language',  name: 'لغات',            count: 39,  color: '#0ea5e9', bg: 'rgba(14,165,233,0.12)',  route: '/courses' },
    { icon: 'pi-chart-bar', name: 'علم البيانات',    count: 27,  color: '#10b981', bg: 'rgba(16,185,129,0.12)',  route: '/courses' },
  ];

  allCourses: Course[] = [
    {
      id: 1, category: 'تطوير الويب',
      title: 'تطوير تطبيقات الويب بـ Angular',
      description: 'تعلّم بناء تطبيقات ويب ديناميكية باستخدام Angular من الأساسيات إلى المفاهيم المتقدمة.',
      image: '../assets/img/angular-course.jpg', numberOfLessons: 42, rate: 4.5, rateCount: 1240,
      author: 'أحمد علي', price: 199.99, gradClass: 'card-img--grad-3', personAvatar: '../assets/img/person-avatar-1.jpg',
      outcomes: ['بناء تطبيقات Angular متكاملة من الصفر', 'إتقان RxJS ومبدأ البرمجة التفاعلية', 'استخدام Angular CLI ونشر التطبيقات للإنتاج', 'بناء مشاريع حقيقية قابلة للإضافة إلى ملفك الشخصي'],
      curriculum: [
        { title: 'مقدمة وإعداد البيئة',         lessons: 4, duration: '45 دقيقة' },
        { title: 'المكوّنات وقوالب Angular',      lessons: 8, duration: '1.5 ساعة' },
        { title: 'التوجيه والتنقل',              lessons: 6, duration: '1 ساعة' },
        { title: 'الخدمات وحقن التبعيات',        lessons: 7, duration: '1.2 ساعة' },
        { title: 'RxJS والمراقِبات',             lessons: 8, duration: '1.5 ساعة' },
        { title: 'الاتصال بالـ API',             lessons: 5, duration: '55 دقيقة' },
        { title: 'مشروع تطبيقي شامل',           lessons: 4, duration: '2 ساعة' },
      ],
      reviews: [
        { name: 'سارة الأحمد',  rate: 5, date: 'يونيو ٢٠٢٦',  comment: 'دورة ممتازة، شرح واضح وأمثلة عملية رائعة.', personAvatar: '../assets/img/person-avatar-2.jpg' },
        { name: 'خالد العمري', rate: 4, date: 'مايو ٢٠٢٦',   comment: 'استفدت كثيراً وطبّقت ما تعلمته فوراً في مشاريعي.', personAvatar: '../assets/img/person-avatar-3.jpg' },
        { name: 'نورا فاروق',  rate: 5, date: 'أبريل ٢٠٢٦', comment: 'أفضل دورة Angular بالعربية، أنصح بها بشدة.', personAvatar: '../assets/img/person-avatar-4.jpg' },
      ],
    },
    {
      id: 2, category: 'تطوير الويب',
      title: 'تطوير تطبيقات الويب بـ React',
      description: 'تعلّم بناء تطبيقات ويب تفاعلية باستخدام React مع Hooks وContext API وRedux.',
      image: '../assets/img/react-course.jpg', numberOfLessons: 38, rate: 4.7, rateCount: 980,
      author: 'محمد حسن', price: 149.99, gradClass: 'card-img--grad-6', personAvatar: '../assets/img/person-avatar-2.jpg',
      outcomes: ['بناء مكوّنات React قابلة لإعادة الاستخدام', 'إتقان Hooks وإدارة الحالة', 'ربط التطبيقات بالـ REST APIs', 'نشر تطبيقات React على بيئات الإنتاج'],
      curriculum: [
        { title: 'مقدمة React وJSX',      lessons: 5, duration: '50 دقيقة' },
        { title: 'المكوّنات والخصائص Props', lessons: 6, duration: '1 ساعة' },
        { title: 'State والـ Hooks',        lessons: 8, duration: '1.5 ساعة' },
        { title: 'Context API وRedux',   lessons: 7, duration: '1.3 ساعة' },
        { title: 'React Router',          lessons: 5, duration: '55 دقيقة' },
        { title: 'استدعاء البيانات والنماذج', lessons: 4, duration: '45 دقيقة' },
        { title: 'مشروع نهائي متكامل',       lessons: 3, duration: '1.5 ساعة' },
      ],
      reviews: [
        { name: 'عمر البلوي',   rate: 5, date: 'يوليو ٢٠٢٦',   comment: 'شرح رائع لـ React Hooks، وفهمت كيف أدير الحالة بشكل صحيح.', personAvatar: '../../assets/img/person-avatar-5.jpg' },
        { name: 'ريم السالم',   rate: 4, date: 'يونيو ٢٠٢٦',   comment: 'دورة عملية جداً، بنيت مشروعين كاملين خلال الدورة.', personAvatar: '../../assets/img/person-avatar-9.jpg' },
        { name: 'فيصل المالكي',  rate: 5, date: 'مايو ٢٠٢٦',   comment: 'أفضل ما تعلمته هذا العام، محتوى احترافي ومدرّب متميز.', personAvatar: '../../assets/img/person-avatar-7.jpg' },
      ],
    },
    {
      id: 3, category: 'تطوير الويب',
      title: 'تطوير تطبيقات الويب بـ Vue.js',
      description: 'تعلّم بناء تطبيقات ويب تفاعلية باستخدام Vue.js مع Vuex وVue Router.',
      image: '../assets/img/vue-course.jpg', numberOfLessons: 40, rate: 4.6, rateCount: 750,
      author: 'محمد أحمد', price: 129.99, gradClass: 'card-img--grad-1', personAvatar: '../assets/img/person-avatar-3.jpg',
      outcomes: ['بناء تطبيقات Vue 3 باستخدام Composition API', 'إدارة الحالة بـ Vuex', 'إنشاء تطبيقات متعددة الصفحات', 'تطبيق البرمجة التفاعلية في مشاريع حقيقية'],
      curriculum: [
        { title: 'مقدمة Vue 3',          lessons: 5, duration: '50 دقيقة' },
        { title: 'قوالب ومكوّنات Vue',   lessons: 7, duration: '1.2 ساعة' },
        { title: 'Composition API',       lessons: 8, duration: '1.4 ساعة' },
        { title: 'Vuex وإدارة الحالة',  lessons: 7, duration: '1.2 ساعة' },
        { title: 'Vue Router',            lessons: 6, duration: '1 ساعة' },
        { title: 'مشروع تطبيقي متكامل',       lessons: 7, duration: '2 ساعة' },
      ],
      reviews: [
        { name: 'لمى الحربي',   rate: 5, date: 'يوليو ٢٠٢٦',  comment: 'Vue.js أسهل إطار تعلمته حتى الآن، والمدرّب شرح بصبر.', personAvatar: '../assets/img/person-avatar-1.jpg' },
        { name: 'جاسم الدوسري', rate: 4, date: 'يونيو ٢٠٢٦', comment: 'تغطية شاملة، سأخذ React بعدها للمقارنة.', personAvatar: '../assets/img/person-avatar-2.jpg' },
        { name: 'مريم القحطاني', rate: 5, date: 'مايو ٢٠٢٦', comment: 'استخدمت Vue في مشروع شركتي بعد أسبوعين فقط!', personAvatar: '../assets/img/person-avatar-3.jpg' },
      ],
    },
    {
      id: 4, category: 'تصميم',
      title: 'تصميم واجهات المستخدم بـ Figma',
      description: 'أتقن تصميم UI/UX من الصفر باستخدام Figma وأدوات التصميم الحديثة.',
      image: '../assets/img/figma-course.jpg', numberOfLessons: 28, rate: 4.8, rateCount: 1560,
      author: 'سارة حداد', price: 89.99, gradClass: 'card-img--grad-2', personAvatar: '../assets/img/person-avatar-4.jpg',
      outcomes: ['تصميم واجهات مستخدم احترافية', 'بناء نماذج أولية تفاعلية', 'إنشاء نظام تصميم متكامل', 'تسليم التصميمات للمطوّرين بكفاءة'],
      curriculum: [
        { title: 'مقدمة Figma والأدوات', lessons: 4, duration: '40 دقيقة' },
        { title: 'مبادئ تصميم UI',       lessons: 6, duration: '1 ساعة' },
        { title: 'تصميم المكوّنات',       lessons: 7, duration: '1.2 ساعة' },
        { title: 'التفاعل والنماذج الأولية',   lessons: 6, duration: '1 ساعة' },
        { title: 'Auto Layout والمكوّنات', lessons: 5, duration: '55 دقيقة' },
      ],
      reviews: [
        { name: 'نورا فاروق',  rate: 5, date: 'يوليو ٢٠٢٦', comment: 'أفضل دورة Figma وجدتها، أحترفت في التصميم خلال شهر.', personAvatar: '../assets/img/person-avatar-5.jpg' },
        { name: 'أحمد سعيد',   rate: 5, date: 'يونيو ٢٠٢٦', comment: 'تغطية كاملة لكل ما أحتاجه مصمّم في بيئة عمل حقيقية.', personAvatar: '../assets/img/person-avatar-6.jpg' },
        { name: 'ليلى حسن',    rate: 4, date: 'مايو ٢٠٢٦',  comment: 'وفّرت علي ساعات من البحث والتجريب العشوائي.', personAvatar: '../assets/img/person-avatar-7.jpg' },
      ],
    },
    {
      id: 5, category: 'ذكاء اصطناعي',
      title: 'مدخل إلى الذكاء الاصطناعي وتعلّم الآلة',
      description: 'تعرّف على أساسيات الذكاء الاصطناعي والشبكات العصبية وتطبيقاتها العملية.',
      image: '../assets/img/AI-course.jpg', numberOfLessons: 35, rate: 4.9, rateCount: 2100,
      author: 'نورا فاروق', price: 179.99, gradClass: 'card-img--grad-4', personAvatar: '../assets/img/person-avatar-5.jpg',
      outcomes: ['فهم تقنيات التعلّم الآلي والتعلّم العميق', 'تطبيق خوارزميات تصنيف البيانات', 'بناء نماذج تنبؤية باستخدام Python', 'استخدام مكتبات TensorFlow وscikit-learn'],
      curriculum: [
        { title: 'مقدمة في الذكاء الاصطناعي',  lessons: 4, duration: '40 دقيقة' },
        { title: 'أساسيات Python للذكاء',  lessons: 6, duration: '1 ساعة' },
        { title: 'التعلّم الآلي الموجّه',          lessons: 8, duration: '1.5 ساعة' },
        { title: 'الشبكات العصبية والتعلّم العميق',  lessons: 9, duration: '2 ساعة' },
        { title: 'معالجة اللغة الطبيعية NLP',       lessons: 5, duration: '55 دقيقة' },
        { title: 'مشروع تطبيقي شامل',           lessons: 3, duration: '2 ساعة' },
      ],
      reviews: [
        { name: 'سارة الأحمد',  rate: 5, date: 'يوليو ٢٠٢٦', comment: 'المحتوى رائع جداً، غيّرت فهمي للذكاء الاصطناعي بشكل كامل.', personAvatar: '../assets/img/person-avatar-1.jpg' },
        { name: 'عمر البلوي',   rate: 5, date: 'يونيو ٢٠٢٦', comment: 'المدرّبة لديها قدرة عالية على تبسيط المفاهيم المعقدة.', personAvatar: '../assets/img/person-avatar-2.jpg' },
        { name: 'لمى الحربي',   rate: 4, date: 'مايو ٢٠٢٦',  comment: 'أفضل دورة AI اتخذتها، وسأكمل مسار علم البيانات.', personAvatar: '../assets/img/person-avatar-3.jpg' },
      ],
    },
    {
      id: 6, category: 'تسويق رقمي',
      title: 'استراتيجيات التسويق الرقمي الشاملة',
      description: 'تعلّم تحسين محركات البحث والإعلانات المدفوعة وإدارة وسائل التواصل الاجتماعي.',
      image: '../assets/img/marketing-course.jpg', numberOfLessons: 30, rate: 4.4, rateCount: 620,
      author: 'خالد العمري', price: 99.99, gradClass: 'card-img--grad-5', personAvatar: '../assets/img/person-avatar-6.jpg',
      outcomes: ['تحسين ظهور الموقع في محركات البحث SEO', 'إدارة حملات Google Ads', 'تحليل بيانات الحملات', 'بناء استراتيجية محتوى فعّالة'],
      curriculum: [
        { title: 'مقدمة التسويق الرقمي',       lessons: 4, duration: '40 دقيقة' },
        { title: 'تحسين محركات البحث SEO', lessons: 7, duration: '1.2 ساعة' },
        { title: 'إعلانات Google وMeta', lessons: 6, duration: '1 ساعة' },
        { title: 'التسويق بالمحتوى',          lessons: 7, duration: '1.2 ساعة' },
        { title: 'تحليل النتائج والأداء',       lessons: 6, duration: '1 ساعة' },
      ],
      reviews: [
        { name: 'ريم السالم',   rate: 4, date: 'يوليو ٢٠٢٦', comment: 'دورة عملية ومتوازنة، حسّنت نتائج موقعي بعد اسبوعين.', personAvatar: '../../assets/img/person-avatar-9.jpg' },
        { name: 'فيصل المالكي',  rate: 4, date: 'يونيو ٢٠٢٦', comment: 'تغطية الإعلانات المدفوعة كانت ممتازة خصوصاً.', personAvatar: '../../assets/img/person-avatar-5.jpg' },
        { name: 'نورا خالد',   rate: 5, date: 'مايو ٢٠٢٦',  comment: 'نفّذت حملتي Google Ads الأولى بنجاح بعد هذه الدورة.', personAvatar: '../../assets/img/person-avatar-8.jpg' },
      ],
    },
    {
      id: 7, category: 'أعمال وإدارة',
      title: 'مهارات القيادة وإدارة الفرق',
      description: 'طوّر مهاراتك القيادية وتعلّم كيفية بناء فرق عمل عالية الأداء.',
      image: '../assets/img/leadership-course.jpg', numberOfLessons: 22, rate: 4.6, rateCount: 890,
      author: 'عمر البلوي', price: 119.99, gradClass: 'card-img--grad-8', personAvatar: '../assets/img/person-avatar-7.jpg',
      outcomes: ['بناء فريق عمل متوازن ومنتج', 'إدارة التغيير وحل الخلافات', 'اتخاذ قرارات بناءة على البيانات', 'تطوير ذكاء عاطفي وإدارة ضغوط العمل'],
      curriculum: [
        { title: 'نماذج القيادة الحديثة',     lessons: 4, duration: '40 دقيقة' },
        { title: 'بناء فرق عمل فعّالة',  lessons: 5, duration: '50 دقيقة' },
        { title: 'التواصل والتفاوض',        lessons: 5, duration: '50 دقيقة' },
        { title: 'إدارة الأداء والتحفيز',  lessons: 4, duration: '40 دقيقة' },
        { title: 'التخطيط الاستراتيجي',      lessons: 4, duration: '40 دقيقة' },
      ],
      reviews: [
        { name: 'خالد العمري', rate: 5, date: 'يوليو ٢٠٢٦', comment: 'غيّرت طريقة قيادتي لفريقي بعد هذه الدورة.', personAvatar: '../assets/img/person-avatar-1.jpg' },
        { name: 'سارة حداد',  rate: 4, date: 'يونيو ٢٠٢٦', comment: 'محتوى عملي وقابل للتطبيق الفوري.', personAvatar: '../assets/img/person-avatar-4.jpg' },
        { name: 'مريم القحطاني', rate: 5, date: 'مايو ٢٠٢٦', comment: 'المدرّب متميّز وتجاربه العملية تضيف قيمة كبيرة.', personAvatar: '../assets/img/person-avatar-3.jpg' },
      ],
    },
    {
      id: 8, category: 'علم البيانات',
      title: 'تحليل البيانات بـ Python وPandas',
      description: 'تعلّم تحليل البيانات وتصويرها باستخدام Python وMatplotlib وPandas.',
      image: '../assets/img/data-science-course.jpg', numberOfLessons: 45, rate: 4.7, rateCount: 1320,
      author: 'ريم السالم', price: 159.99, gradClass: 'card-img--grad-10', personAvatar: '../../assets/img/person-avatar-9.jpg',
      outcomes: ['معالجة وتنظيف البيانات باحتراف', 'رسم مخططات تحليلية متقدمة', 'استخلاص رؤى تجارية من البيانات', 'استخدام SQL مع Pandas'],
      curriculum: [
        { title: 'مقدمة Python للبيانات',  lessons: 6, duration: '1 ساعة' },
        { title: 'NumPy وعمليات المصفوفات', lessons: 7, duration: '1.2 ساعة' },
        { title: 'Pandas وتحليل البيانات',  lessons: 9, duration: '1.5 ساعة' },
        { title: 'تصوير البيانات Matplotlib', lessons: 7, duration: '1.2 ساعة' },
        { title: 'مشروع تحليلي متكامل',       lessons: 8, duration: '1.5 ساعة' },
        { title: 'العرض والتقارير',              lessons: 8, duration: '1.5 ساعة' },
      ],
      reviews: [
        { name: 'نورا خالد',   rate: 5, date: 'يوليو ٢٠٢٦', comment: 'جت من خلفية محاسبية وأصبحت محلّلة بيانات خلال ستة أشهر.', personAvatar: '../../assets/img/person-avatar-8.jpg' },
        { name: 'أحمد سعيد',   rate: 4, date: 'يونيو ٢٠٢٦', comment: 'Pandas شرح مبسّط ومفيد جداً.', personAvatar: '../../assets/img/person-avatar-6.jpg' },
        { name: 'خالد العمري', rate: 5, date: 'مايو ٢٠٢٦',  comment: 'بنيت لوحة بيانات كاملة لشركتي بعد هذه الدورة.', personAvatar: '../../assets/img/person-avatar-5.jpg' },
      ],
    },
    {
      id: 9, category: 'تطوير الموبايل',
      title: 'بناء تطبيقات الموبايل بـ Flutter',
      description: 'أنشئ تطبيقات موبايل لنظامَي iOS وAndroid بكود واحد باستخدام Flutter.',
      image: '../assets/img/flutter-course.jpg', numberOfLessons: 50, rate: 4.8, rateCount: 1780,
      author: 'فيصل المالكي', price: 189.99, gradClass: 'card-img--grad-11', personAvatar: '../assets/img/person-avatar-2.jpg',
      outcomes: ['بناء تطبيقات iOS وAndroid بكود واحد', 'إدارة الحالة بـ Provider وRiverpod', 'ربط التطبيقات بقواعد بيانات Firebase', 'نشر التطبيقات على المتجرين'],
      curriculum: [
        { title: 'مقدمة Flutter وDart', lessons: 5, duration: '50 دقيقة' },
        { title: 'الويجتس وبناء الواجهات', lessons: 8, duration: '1.4 ساعة' },
        { title: 'التنقل بين الشاشات',      lessons: 6, duration: '1 ساعة' },
        { title: 'إدارة الحالة State Management', lessons: 8, duration: '1.5 ساعة' },
        { title: 'ربط Firebase',              lessons: 7, duration: '1.2 ساعة' },
        { title: 'النشر والتوزيع',              lessons: 7, duration: '1.2 ساعة' },
        { title: 'مشروع تطبيقي كامل',          lessons: 9, duration: '2.5 ساعة' },
      ],
      reviews: [
        { name: 'سارة الأحمد',  rate: 5, date: 'يوليو ٢٠٢٦', comment: 'بنيت تطبيق وفعّلته على المتجر خلال الدورة.', personAvatar: '../assets/img/person-avatar-2.jpg' },
        { name: 'عمر البلوي',   rate: 5, date: 'يونيو ٢٠٢٦', comment: 'أفضل دورة تطوير موبايل بالعربية.', personAvatar: '../assets/img/person-avatar-3.jpg' },
        { name: 'لمى الحربي',   rate: 4, date: 'مايو ٢٠٢٦',  comment: 'المدرّب شرح Flutter بطريقة بسيطة ومفهومة.', personAvatar: '../assets/img/person-avatar-4.jpg' },
      ],
    },
    {
      id: 10, category: 'تصميم',
      title: 'أساسيات الجرافيك والهوية البصرية',
      description: 'تعلّم مبادئ التصميم الجرافيكي وبناء هويات بصرية احترافية للشركات.',
      image: '../assets/img/graphic-design-course.jpg', numberOfLessons: 32, rate: 4.5, rateCount: 540,
      author: 'لمى الحربي', price: 79.99, gradClass: 'card-img--grad-7', personAvatar: '../assets/img/person-avatar-3.jpg',
      outcomes: ['تطبيق مبادئ التصميم بستراتيجية', 'إنشاء شعارات وهويات بصرية متكاملة', 'استخدام Adobe Illustrator باحتراف', 'تسليم ملفات التصميم بصيغ مختلفة'],
      curriculum: [
        { title: 'مبادئ التصميم',            lessons: 5, duration: '50 دقيقة' },
        { title: 'أدوات Adobe Illustrator',  lessons: 7, duration: '1.2 ساعة' },
        { title: 'تصميم الشعارات Logo',    lessons: 6, duration: '1 ساعة' },
        { title: 'بناء هوية بصرية كاملة', lessons: 8, duration: '1.4 ساعة' },
        { title: 'مشروع تصميم احترافي',      lessons: 6, duration: '1 ساعة' },
      ],
      reviews: [
        { name: 'كريم يوسف',   rate: 5, date: 'يوليو ٢٠٢٦', comment: 'أصبحت مصمّمة احترافية بعد هذه الدورة.', personAvatar: '../../assets/img/person-avatar-6.jpg' },
        { name: 'فيصل المالكي',  rate: 4, date: 'يونيو ٢٠٢٦', comment: 'بسيط وممتع، أنصح بها لكل مبتدئ.', personAvatar: '../../assets/img/person-avatar-7.jpg' },
        { name: 'ريم السالم',   rate: 5, date: 'مايو ٢٠٢٦',  comment: 'أحببت أسلوب الشرح العملي المرتبط بالمشاريع.', personAvatar: '../../assets/img/person-avatar-9.jpg' },
      ],
    },
    {
      id: 11, category: 'لغات',
      title: 'اللغة الإنجليزية للمحترفين',
      description: 'طوّر مهاراتك في اللغة الإنجليزية التجارية والتواصل الفعّال في بيئة العمل.',
      image: '../assets/img/english-course.jpg', numberOfLessons: 36, rate: 4.6, rateCount: 2300,
      author: 'مريم القحطاني', price: 69.99, gradClass: 'card-img--grad-9', personAvatar: '../assets/img/person-avatar-4.jpg',
      outcomes: ['احتراف التواصل في بيئات العمل الدولية', 'كتابة رسائل إلكترونية وتقارير احترافية', 'تحسين مهارات العرض والمناقشة', 'اجتياز شهادة IELTS / TOEFL'],
      curriculum: [
        { title: 'أساسيات الإنجليزية التجارية', lessons: 6, duration: '1 ساعة' },
        { title: 'مهارات الاستماع والتحدّث',   lessons: 7, duration: '1.2 ساعة' },
        { title: 'الكتابة المهنية',            lessons: 8, duration: '1.4 ساعة' },
        { title: 'العروض والمفاوضات',         lessons: 7, duration: '1.2 ساعة' },
        { title: 'التحضير للاختبارات',         lessons: 8, duration: '1.4 ساعة' },
      ],
      reviews: [
        { name: 'جاسم الدوسري', rate: 5, date: 'يوليو ٢٠٢٦', comment: 'جت بمستوى B1 وخرجت بمستوى C1 بعد الدورة.', personAvatar: '../assets/img/person-avatar-1.jpg' },
        { name: 'ليلى حسن',    rate: 4, date: 'يونيو ٢٠٢٦', comment: 'أسلوب شرح ممتع وأتقنت التفاوض.', personAvatar: '../assets/img/person-avatar-2.jpg' },
        { name: 'محمد حسن',   rate: 5, date: 'مايو ٢٠٢٦',  comment: 'بثقة باللغة بعد ستة أشهر من الدورة.', personAvatar: '../assets/img/person-avatar-3.jpg' },
      ],
    },
    {
      id: 12, category: 'تسويق رقمي',
      title: 'صناعة المحتوى وإدارة المدونات',
      description: 'تعلّم كتابة محتوى رقمي جذّاب وإدارة المدونات وتحسينها لمحركات البحث.',
      image: '../assets/img/content-marketing-course.jpg', numberOfLessons: 24, rate: 4.3, rateCount: 410,
      author: 'جاسم الدوسري', price: 59.99, gradClass: 'card-img--grad-4', personAvatar: '../assets/img/person-avatar-5.jpg',
      outcomes: ['كتابة محتوى محسّن لمحركات البحث', 'إدارة مدونة ونشر محتوى منتظم', 'تحليل أداء المحتوى بالبيانات', 'بناء استراتيجية محتوى متكاملة'],
      curriculum: [
        { title: 'مبادئ صناعة المحتوى',       lessons: 4, duration: '40 دقيقة' },
        { title: 'كتابة مقالات محسّنة SEO', lessons: 6, duration: '1 ساعة' },
        { title: 'إدارة المدونة WordPress',  lessons: 6, duration: '1 ساعة' },
        { title: 'تحليل الأداء',              lessons: 4, duration: '40 دقيقة' },
        { title: 'مشروع مدونة كاملة',       lessons: 4, duration: '50 دقيقة' },
      ],
      reviews: [
        { name: 'نورا خالد',   rate: 4, date: 'يوليو ٢٠٢٦', comment: 'محتوى عملي مباشر، استخدمته فوراً.', personAvatar: '../../assets/img/person-avatar-8.jpg' },
        { name: 'أحمد سعيد',   rate: 4, date: 'يونيو ٢٠٢٦', comment: 'جيد للمبتدئين في عالم صناعة المحتوى.', personAvatar: '../../assets/img/person-avatar-6.jpg' },
        { name: 'سارة حداد',  rate: 5, date: 'مايو ٢٠٢٦',  comment: 'أضافت خطّة تحرير احترافية بعد الدورة.', personAvatar: '../../assets/img/person-avatar-4.jpg' },
      ],
    },
  ];

  getById(id: number): Course | undefined {
    return this.allCourses.find(c => c.id === id);
  }
}


