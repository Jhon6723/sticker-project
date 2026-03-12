import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LottieAnimationData } from '../../../core/models/lottie.model';
import { Sticker } from '../../../core/models/sticker.model';
import { DownloadService } from '../../../core/services/download.service';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-button.html',
  styleUrl: './download-button.scss'
})
export class DownloadButtonComponent implements OnDestroy {
  @Input() sticker: Sticker | null = null;
  @Input() animationData: LottieAnimationData | null = null;
  @Input() loading = false;
  @Output() downloadStart = new EventEmitter<string>();
  @Output() downloadComplete = new EventEmitter<string>();

  downloadService = inject(DownloadService);
  destroy$ = new Subject<void>();

  downloadAsGif(): void {
    if (!this.sticker || !this.animationData) return;
    
    const filename = `${this.sticker.id}.gif`;
    this.downloadStart.emit('gif');
    
    // Aquí el componente debería extraer los frames de la animación Lottie
    // y pasarlos al servicio. Por ahora, usamos un array vacío como placeholder
    const frames: ImageData[] = [];
    
    this.downloadService.convertFramesToGif(
      frames, 
      filename,
      this.sticker.width || 256,
      this.sticker.height || 256
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => {
        this.downloadComplete.emit('gif');
      },
      error: (error: Error) => {
        console.error('Error downloading GIF:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
