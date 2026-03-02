import { GiphyStickerRaw } from "../interfaces/Giphy/giphy-raw.interface";

export function adaptGiphySticker(raw: GiphyStickerRaw) {
  return {
    id: raw.id,
    title: raw.title,
    previewUrl: raw.images.fixed_height_small.url,
    downloadUrl: raw.images.original.url,
    source: 'giphy',
    isAnimated: true
  };
}