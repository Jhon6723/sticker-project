import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import GIF from 'gif.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  downloadFile(blob: Blob, filename: string): void {
    saveAs(blob, filename);
  }

  convertFramesToGif(
    frames: ImageData[],
    filename: string,
    width: number = 256,
    height: number = 256,
    frameDelay: number = 50
  ): Observable<void> {
    return new Observable<void>(observer => {
      const gif = new GIF({
        workers: 2,
        quality: 10,
        width,
        height,
        workerScript: 'https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.worker.js'
      });

      // Crear canvas temporal para cada frame
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        observer.error(new Error('Cannot get canvas context'));
        return;
      }

      // Agregar cada frame al GIF
      frames.forEach(frame => {
        ctx.putImageData(frame, 0, 0);
        gif.addFrame(ctx, { copy: true, delay: frameDelay });
      });

      gif.on('finished', (blob: Blob) => {
        this.downloadFile(blob, filename);
        observer.next();
        observer.complete();
      });

      gif.render();
    });
  }
}
