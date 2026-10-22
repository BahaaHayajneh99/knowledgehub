import { Injectable } from '@angular/core';

export interface PathCourse {
  order: number;
  title: string;
  duration: string;
  level: string;
}

export interface LearningPath {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorClass: string;
  level: string;
  duration: string;
  totalCourses: number;
  totalLessons: number;
  outcomes: string[];
  prerequisites: string[];
  courses: PathCourse[];
}

@Injectable({ providedIn: 'root' })
export class PathsService {

  readonly paths: LearningPath[] = [
    {
      id: 1,
      slug: 'frontend',
      title: 'تطوير الواجهة الأمامية',
      subtitle: 'أتقن بناء تجارب الويب التفاعلية الحديثة',
      description: 'مسار شامل يأخذك من أساسيات HTML وCSS إلى بناء تطبيقات ويب متطورة باستخدام أحدث الأطر والمكتبات. ستكتسب المهارات اللازمة لتصميم وتطوير واجهات مستخدم جذابة ومتجاوبة تعمل على جميع الأجهزة.',
      icon: 'nx-monitor',
      colorClass: 'pt-color--frontend',
      level: 'مبتدئ إلى متقدم',
      duration: '8 أشهر',
      totalCourses: 7,
      totalLessons: 210,
      outcomes: [
        'بناء صفحات ويب احترافية بـ HTML5 وCSS3',
        'إتقان JavaScript وTypeScript من الصفر',
        'تطوير تطبيقات تفاعلية بـ Angular',
        'تصميم واجهات متجاوبة (Responsive Design)',
        'التعامل مع REST APIs واستهلاك البيانات',
        'نشر التطبيقات على الإنترنت واستضافتها',
      ],
      prerequisites: [
        'معرفة أساسية باستخدام الحاسوب والإنترنت',
        'رغبة في التعلم والمثابرة',
      ],
      courses: [
        { order: 1, title: 'أساسيات HTML5 وCSS3', duration: '4 أسابيع', level: 'مبتدئ' },
        { order: 2, title: 'JavaScript من الصفر حتى الاحتراف', duration: '6 أسابيع', level: 'مبتدئ' },
        { order: 3, title: 'TypeScript للمطورين', duration: '3 أسابيع', level: 'متوسط' },
        { order: 4, title: 'تصميم متجاوب مع Bootstrap وTailwind', duration: '3 أسابيع', level: 'متوسط' },
        { order: 5, title: 'تطوير تطبيقات Angular المتكاملة', duration: '8 أسابيع', level: 'متوسط' },
        { order: 6, title: 'إدارة الحالة مع NgRx وSignals', duration: '4 أسابيع', level: 'متقدم' },
        { order: 7, title: 'اختبار التطبيقات والنشر التلقائي', duration: '4 أسابيع', level: 'متقدم' },
      ],
    },
    {
      id: 2,
      slug: 'backend',
      title: 'تطوير الواجهة الخلفية',
      subtitle: 'ابنِ الأنظمة والخوادم القوية والقابلة للتوسع',
      description: 'مسار متكامل لبناء الخوادم وقواعد البيانات وواجهات برمجة التطبيقات (APIs). ستتعلم كيفية تصميم أنظمة موثوقة وآمنة وقابلة للتوسع تدعم تطبيقات الويب والهاتف الحديثة.',
      icon: 'nx-layout',
      colorClass: 'pt-color--backend',
      level: 'متوسط إلى متقدم',
      duration: '9 أشهر',
      totalCourses: 8,
      totalLessons: 240,
      outcomes: [
        'بناء REST APIs احترافية وموثّقة',
        'إتقان Node.js وExpress من الأساس',
        'التعامل مع قواعد البيانات SQL وNoSQL',
        'تطبيق مبادئ الأمان والمصادقة JWT وOAuth',
        'تصميم معمارية الخدمات المصغرة (Microservices)',
        'نشر التطبيقات على السحابة باستخدام Docker',
      ],
      prerequisites: [
        'أساسيات البرمجة بأي لغة برمجة',
        'فهم مفاهيم الويب الأساسية (HTTP, Client-Server)',
      ],
      courses: [
        { order: 1, title: 'أساسيات Node.js وبيئة التطوير', duration: '5 أسابيع', level: 'مبتدئ' },
        { order: 2, title: 'بناء APIs مع Express.js', duration: '5 أسابيع', level: 'متوسط' },
        { order: 3, title: 'قواعد بيانات SQL مع PostgreSQL', duration: '5 أسابيع', level: 'متوسط' },
        { order: 4, title: 'MongoDB وقواعد البيانات NoSQL', duration: '4 أسابيع', level: 'متوسط' },
        { order: 5, title: 'المصادقة والأمان JWT وOAuth', duration: '4 أسابيع', level: 'متوسط' },
        { order: 6, title: 'تصميم المعمارية والتوسع الأفقي', duration: '5 أسابيع', level: 'متقدم' },
        { order: 7, title: 'Docker وKubernetes ونشر التطبيقات', duration: '5 أسابيع', level: 'متقدم' },
        { order: 8, title: 'الاختبار والتكامل والتسليم المستمر CI/CD', duration: '3 أسابيع', level: 'متقدم' },
      ],
    },
    {
      id: 3,
      slug: 'data',
      title: 'علوم البيانات',
      subtitle: 'حوّل البيانات الخام إلى رؤى قابلة للتطبيق',
      description: 'مسار شامل يغطي تحليل البيانات والتصوير البصري والتعلم الآلي والذكاء الاصطناعي. ستتعلم كيفية استخراج الأفكار القيّمة من البيانات الضخمة واتخاذ قرارات مبنية على الأدلة.',
      icon: 'nx-chart-bar',
      colorClass: 'pt-color--data',
      level: 'متوسط إلى متقدم',
      duration: '10 أشهر',
      totalCourses: 8,
      totalLessons: 260,
      outcomes: [
        'إتقان Python وأدواته لتحليل البيانات',
        'استخدام Pandas وNumPy وMatplotlib بكفاءة',
        'بناء نماذج التعلم الآلي والتنبؤ',
        'تصوير البيانات وسرد القصص بالأرقام',
        'التعامل مع قواعد البيانات والاستعلامات SQL',
        'نشر نماذج الذكاء الاصطناعي في الإنتاج',
      ],
      prerequisites: [
        'أساسيات الرياضيات والإحصاء',
        'لا يشترط خبرة برمجية مسبقة',
      ],
      courses: [
        { order: 1, title: 'Python للمبتدئين في علم البيانات', duration: '5 أسابيع', level: 'مبتدئ' },
        { order: 2, title: 'الإحصاء وتحليل البيانات الأساسي', duration: '5 أسابيع', level: 'متوسط' },
        { order: 3, title: 'Pandas وNumPy لمعالجة البيانات', duration: '4 أسابيع', level: 'متوسط' },
        { order: 4, title: 'تصوير البيانات مع Matplotlib وSeaborn', duration: '4 أسابيع', level: 'متوسط' },
        { order: 5, title: 'SQL لعلماء البيانات', duration: '4 أسابيع', level: 'متوسط' },
        { order: 6, title: 'مقدمة في التعلم الآلي مع Scikit-learn', duration: '6 أسابيع', level: 'متقدم' },
        { order: 7, title: 'التعلم العميق مع TensorFlow وKeras', duration: '6 أسابيع', level: 'متقدم' },
        { order: 8, title: 'مشاريع علم البيانات التطبيقية الكاملة', duration: '6 أسابيع', level: 'متقدم' },
      ],
    },
    {
      id: 4,
      slug: 'ux',
      title: 'تصميم تجربة المستخدم',
      subtitle: 'صمّم تجارب رقمية لا تُنسى وواجهات جذّابة',
      description: 'مسار متكامل يغطي بحث المستخدم وتصميم التفاعل ونمذجة الواجهات واختبار قابلية الاستخدام. ستتعلم كيفية إنشاء تجارب مستخدم مدروسة وجميلة تحل مشكلات حقيقية.',
      icon: 'nx-palette',
      colorClass: 'pt-color--ux',
      level: 'مبتدئ إلى متوسط',
      duration: '6 أشهر',
      totalCourses: 6,
      totalLessons: 160,
      outcomes: [
        'إتقان أدوات Figma وAdobe XD لتصميم الواجهات',
        'إجراء بحوث المستخدم والمقابلات الميدانية',
        'بناء شخصيات المستخدم (Personas) وخرائط السفر',
        'تصميم تدفق المستخدم (User Flow) والتفاعل',
        'إنشاء نماذج أولية (Prototypes) قابلة للاختبار',
        'إجراء اختبارات قابلية الاستخدام وتحليل النتائج',
      ],
      prerequisites: [
        'اهتمام بالتصميم والإبداع الرقمي',
        'لا يشترط خبرة تصميمية مسبقة',
      ],
      courses: [
        { order: 1, title: 'أساسيات تجربة المستخدم UX', duration: '4 أسابيع', level: 'مبتدئ' },
        { order: 2, title: 'بحث المستخدم وتحليل الاحتياجات', duration: '4 أسابيع', level: 'مبتدئ' },
        { order: 3, title: 'تصميم الواجهات مع Figma', duration: '5 أسابيع', level: 'متوسط' },
        { order: 4, title: 'مبادئ التصميم البصري والتيبوغرافيا', duration: '4 أسابيع', level: 'متوسط' },
        { order: 5, title: 'النمذجة الأولية واختبار الاستخدام', duration: '4 أسابيع', level: 'متوسط' },
        { order: 6, title: 'إنشاء ملف أعمال UX احترافي', duration: '3 أسابيع', level: 'متوسط' },
      ],
    },
    {
      id: 5,
      slug: 'leadership',
      title: 'القيادة',
      subtitle: 'طوّر مهاراتك القيادية وأثّر إيجاباً في فريقك',
      description: 'مسار مخصص لمن يسعون إلى قيادة الفرق وإدارة المنظمات بفعالية. ستتعلم مفاهيم القيادة الحديثة وبناء الثقافة المؤسسية وتحفيز الفرق لتحقيق الأهداف الاستراتيجية.',
      icon: 'nx-users',
      colorClass: 'pt-color--leadership',
      level: 'متوسط إلى متقدم',
      duration: '5 أشهر',
      totalCourses: 5,
      totalLessons: 130,
      outcomes: [
        'تطوير أسلوب قيادة فعّال وأصيل يلهم الآخرين',
        'بناء فرق عمل عالية الأداء ومتناسقة',
        'إتقان فن التواصل والإقناع والتفاوض',
        'إدارة النزاعات وتحويلها إلى فرص للنمو',
        'تطوير الثقافة المؤسسية الإيجابية والمنتجة',
        'اتخاذ القرارات الاستراتيجية في أوقات الضغط',
      ],
      prerequisites: [
        'خبرة عملية لا تقل عن سنتين في أي مجال',
        'رغبة حقيقية في تطوير المهارات الشخصية والقيادية',
      ],
      courses: [
        { order: 1, title: 'أساسيات القيادة الحديثة ونماذجها', duration: '4 أسابيع', level: 'متوسط' },
        { order: 2, title: 'بناء الفرق وتطوير الأداء الجماعي', duration: '4 أسابيع', level: 'متوسط' },
        { order: 3, title: 'مهارات التواصل والتأثير والإقناع', duration: '4 أسابيع', level: 'متوسط' },
        { order: 4, title: 'إدارة النزاعات والتفاوض الفعّال', duration: '4 أسابيع', level: 'متقدم' },
        { order: 5, title: 'التفكير الاستراتيجي وصنع القرار', duration: '4 أسابيع', level: 'متقدم' },
      ],
    },
    {
      id: 6,
      slug: 'management',
      title: 'إدارة المشاريع',
      subtitle: 'أدر مشاريعك باحترافية وحقق أهدافك في الوقت المحدد',
      description: 'مسار شامل يغطي منهجيات إدارة المشاريع التقليدية والرشيقة (Agile). ستتعلم كيفية التخطيط وتتبع التقدم وإدارة المخاطر وتسليم المشاريع ضمن الميزانية والجدول الزمني المحدد.',
      icon: 'nx-folder',
      colorClass: 'pt-color--management',
      level: 'مبتدئ إلى متقدم',
      duration: '7 أشهر',
      totalCourses: 6,
      totalLessons: 180,
      outcomes: [
        'إتقان منهجيات PMI وPMP لإدارة المشاريع',
        'تطبيق Agile وScrum في المشاريع الحقيقية',
        'بناء خطط مشاريع واقعية وقابلة للتنفيذ',
        'إدارة المخاطر والتغييرات بكفاءة',
        'قياس الأداء باستخدام مؤشرات KPIs',
        'إدارة أصحاب المصلحة (Stakeholders) وتوقعاتهم',
      ],
      prerequisites: [
        'لا يشترط خبرة مسبقة في إدارة المشاريع',
        'خبرة عملية بأي مجال تُعدّ ميزة إضافية',
      ],
      courses: [
        { order: 1, title: 'مقدمة شاملة في إدارة المشاريع', duration: '4 أسابيع', level: 'مبتدئ' },
        { order: 2, title: 'التخطيط والجدولة الزمنية للمشاريع', duration: '5 أسابيع', level: 'متوسط' },
        { order: 3, title: 'Agile وScrum من التطبيق إلى الإتقان', duration: '5 أسابيع', level: 'متوسط' },
        { order: 4, title: 'إدارة المخاطر والجودة في المشاريع', duration: '4 أسابيع', level: 'متوسط' },
        { order: 5, title: 'القيادة وإدارة أصحاب المصلحة', duration: '4 أسابيع', level: 'متقدم' },
        { order: 6, title: 'التحضير لشهادة PMP العالمية', duration: '6 أسابيع', level: 'متقدم' },
      ],
    },
  ];

  getAll(): LearningPath[] {
    return this.paths;
  }

  getBySlug(slug: string): LearningPath | undefined {
    return this.paths.find(p => p.slug === slug);
  }
}
