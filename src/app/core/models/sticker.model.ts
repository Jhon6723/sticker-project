export interface Sticker {
  id: string;
  title?: string;
  description?: string;
  url?: string;
  thumbnailUrl?: string;
  platform: 'telegram' | 'discord' | 'giphy';
  type: 'tgs' | 'gif' | 'png' | 'apng' | 'webp' | 'lottie';
  fileId?: string;
  packId?: string;
  isAnimated: boolean;
  width?: number;
  height?: number;
  fileSize?: number;
  tags?: string[];
}

export interface StickerPack {
  id: string;
  name: string;
  title?: string;
  description?: string;
  platform: 'telegram' | 'discord' | 'giphy';
  stickers: Sticker[];
  thumbnailUrl?: string;
  isAnimated: boolean;
  totalStickers: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchFilters {
  platform?: string;
  query?: string;
  type?: string;
  animated?: boolean;
  limit?: number;
  offset?: number;
}
