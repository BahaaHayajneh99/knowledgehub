import { Component, inject, OnInit } from '@angular/core';
import { NxIcon } from 'nexium-ui';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../guard/auth/auth.service';
import { CertificateModalComponent, CertData } from './certificate-modal/certificate-modal.component';

type Tab = 'overview' | 'courses' | 'certificates' | 'settings';

@Component({
  selector: 'app-profile',
  imports: [NxIcon, FormsModule, RouterLink, CertificateModalComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private auth = inject(AuthService);

  activeTab: Tab = 'overview';
  user: any = null;

  activeCert: CertData | null = null;
  certAutoPrint = false;

  settingsForm = { fullName: '', bio: '' };
  passwordForm = { current: '', newPass: '', confirm: '' };

  settingsSaved = false;
  settingsError = '';
  passwordSaved = false;
  passwordError = '';

  showCurrentPwd = false;
  showNewPwd = false;
  showConfirmPwd = false;

  readonly stats = [
    { label: 'الدورات المسجّلة',  value: 7,    icon: 'nx-book',          color: '#4DD9CF' },
    { label: 'الدورات المكتملة',  value: 3,    icon: 'nx-check-circle',  color: '#43e97b' },
    { label: 'الاختبارات',         value: 12,   icon: 'nx-edit',        color: '#f9c74f' },
    { label: 'النقاط المكتسبة',   value: 1840, icon: 'nx-star',          color: '#f5576c' },
  ];

  readonly courses = [
    { title: 'أساسيات البرمجة بـ Python',          instructor: 'أ. محمد السيد', progress: 85,  category: 'برمجة',           duration: '12 ساعة', color: '#4DD9CF' },
    { title: 'تصميم واجهات المستخدم UI/UX',        instructor: 'أ. سارة أحمد',  progress: 60,  category: 'تصميم',           duration: '8 ساعة',  color: '#f9c74f' },
    { title: 'أساسيات الذكاء الاصطناعي',           instructor: 'أ. خالد عمر',   progress: 30,  category: 'ذكاء اصطناعي',   duration: '20 ساعة', color: '#a78bfa' },
    { title: 'تطوير تطبيقات الويب بـ Angular',     instructor: 'أ. ليلى حسن',   progress: 100, category: 'برمجة',           duration: '16 ساعة', color: '#f5576c' },
    { title: 'قواعد البيانات وSQL',                 instructor: 'أ. عمر فارس',   progress: 45,  category: 'قواعد بيانات',   duration: '10 ساعة', color: '#1E90FF' },
    { title: 'إدارة المشاريع Agile',               instructor: 'أ. نور الدين',   progress: 100, category: 'إدارة',           duration: '6 ساعة',  color: '#43e97b' },
    { title: 'أمن المعلومات والشبكات',             instructor: 'أ. فاطمة علي',   progress: 15,  category: 'أمن سيبراني',    duration: '14 ساعة', color: '#fb923c' },
  ];

  readonly certificates = [
    { title: 'تطوير تطبيقات الويب بـ Angular', date: '15 مارس 2024',    instructor: 'أ. ليلى حسن',  id: 'CERT-2024-001' },
    { title: 'إدارة المشاريع Agile',           date: '20 يناير 2024',   instructor: 'أ. نور الدين', id: 'CERT-2024-002' },
    { title: 'Python للمبتدئين',               date: '5 نوفمبر 2023',  instructor: 'أ. محمد السيد', id: 'CERT-2023-015' },
  ];

  readonly activity = [
    { icon: 'nx-book',          color: '#4DD9CF', text: 'أكملت درس "المصفوفات في Python"',             time: 'منذ ساعتين' },
    { icon: 'nx-check-circle',  color: '#43e97b', text: 'اجتزت اختبار "أساسيات CSS" بدرجة 92%',        time: 'أمس' },
    { icon: 'nx-star',          color: '#f9c74f', text: 'حصلت على شهادة تطوير Angular',                 time: 'منذ 3 أيام' },
    { icon: 'nx-video',          color: '#a78bfa', text: 'بدأت دورة "أمن المعلومات والشبكات"',           time: 'منذ أسبوع' },
    { icon: 'nx-edit',        color: '#1E90FF', text: 'أجريت اختبار "قواعد البيانات" بدرجة 78%',      time: 'منذ أسبوعين' },
    { icon: 'nx-book',          color: '#fb923c', text: 'استأنفت دورة "إدارة المشاريع Agile"',          time: 'منذ 3 أسابيع' },
  ];

  readonly skills = ['Python', 'Angular', 'UI/UX', 'SQL', 'Agile', 'HTML/CSS', 'JavaScript', 'Git', 'Linux', 'Docker'];

  readonly progressAreas = [
    { label: 'البرمجة',           pct: 78,  color: '#4DD9CF' },
    { label: 'التصميم',           pct: 60,  color: '#f9c74f' },
    { label: 'الذكاء الاصطناعي', pct: 30,  color: '#a78bfa' },
    { label: 'الأمن السيبراني',   pct: 15,  color: '#fb923c' },
  ];

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
    if (this.user) {
      this.settingsForm.fullName = this.user.fullName;
      this.settingsForm.bio      = this.user.bio ?? '';
    }
  }

  get initials(): string {
    return (this.user?.fullName ?? '')
      .trim().split(/\s+/).slice(0, 2)
      .map((w: string) => w[0]?.toUpperCase() ?? '').join('');
  }

  get joinYear(): string {
    if (this.user?.joinDate) return new Date(this.user.joinDate).getFullYear().toString();
    return new Date().getFullYear().toString();
  }

  viewCertificate(cert: { title: string; date: string; instructor: string; id: string }): void {
    this.activeCert = { ...cert, studentName: this.user?.fullName ?? '' };
    this.certAutoPrint = false;
  }

  downloadCertificate(cert: { title: string; date: string; instructor: string; id: string }): void {
    this.activeCert = { ...cert, studentName: this.user?.fullName ?? '' };
    this.certAutoPrint = true;
  }

  closeCertModal(): void {
    this.activeCert = null;
    this.certAutoPrint = false;
  }

  saveSettings(): void {
    this.settingsSaved = false;
    this.settingsError = '';
    if (!this.settingsForm.fullName.trim()) {
      this.settingsError = 'الاسم الكامل مطلوب';
      return;
    }
    this.auth.updateUser({ fullName: this.settingsForm.fullName.trim(), bio: this.settingsForm.bio });
    this.user = this.auth.getCurrentUser();
    this.settingsSaved = true;
    setTimeout(() => (this.settingsSaved = false), 3000);
  }

  changePassword(): void {
    this.passwordSaved = false;
    this.passwordError = '';
    if (!this.passwordForm.current) {
      this.passwordError = 'يرجى إدخال كلمة المرور الحالية'; return;
    }
    if (this.passwordForm.current !== this.user?.password) {
      this.passwordError = 'كلمة المرور الحالية غير صحيحة'; return;
    }
    if (this.passwordForm.newPass.length < 8) {
      this.passwordError = 'كلمة المرور الجديدة يجب أن تكون 8 أحرف على الأقل'; return;
    }
    if (this.passwordForm.newPass !== this.passwordForm.confirm) {
      this.passwordError = 'كلمتا المرور الجديدتان غير متطابقتين'; return;
    }
    this.auth.updateUser({ password: this.passwordForm.newPass });
    this.user = this.auth.getCurrentUser();
    this.passwordForm = { current: '', newPass: '', confirm: '' };
    this.passwordSaved = true;
    setTimeout(() => (this.passwordSaved = false), 3000);
  }
}
