import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { Sticker, StickerPack } from '../models/sticker.model';

@Injectable({
  providedIn: 'root'
})
export class StickerService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  getStickers(platform: string, query?: string): Observable<ApiResponse<Sticker[]>> {
    const url = query 
      ? `${this.apiUrl}/stickers/${platform}?q=${query}`
      : `${this.apiUrl}/stickers/${platform}`;
    
    return this.http.get<ApiResponse<Sticker[]>>(url);
  }

  getStickerPack(platform: string, packId: string): Observable<ApiResponse<StickerPack>> {
    return this.http.get<ApiResponse<StickerPack>>(`${this.apiUrl}/stickers/${platform}/pack/${packId}`);
  }

  getTelegramFile(fileId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/telegram/file/${fileId}`, {
      responseType: 'blob'
    });
  }
}
