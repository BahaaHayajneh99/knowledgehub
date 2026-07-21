import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

export interface CertData {
  title: string;
  date: string;
  instructor: string;
  id: string;
  studentName: string;
}

@Component({
  selector: 'app-certificate-modal',
  imports: [],
  templateUrl: './certificate-modal.component.html',
  styleUrl: './certificate-modal.component.scss'
})
export class CertificateModalComponent implements OnChanges {
  @Input() cert: CertData | null = null;
  @Input() autoPrint = false;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('certEl') certEl!: ElementRef<HTMLElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cert'] && this.cert && this.autoPrint) {
      // Small delay so the cert renders before printing
      setTimeout(() => this.print(), 300);
    }
  }

  print(): void {
    const certEl = document.getElementById('kh-cert');
    if (!certEl) return;

    // Clone the cert node directly onto <body> so it becomes a direct child
    // and the @media print rule can target it without fighting the component tree.
    const clone = certEl.cloneNode(true) as HTMLElement;
    clone.id = 'kh-cert-print';
    document.body.appendChild(clone);
    document.body.classList.add('kh-printing');

    window.addEventListener('afterprint', () => {
      document.body.classList.remove('kh-printing');
      clone.parentNode?.removeChild(clone);
    }, { once: true });

    window.print();
  }

  closeOnBackdrop(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains('cert-overlay')) {
      this.closed.emit();
    }
  }
}
