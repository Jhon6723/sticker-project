import { User } from './giphy-user.interface';

/**
 * Image rendition with different formats and sizes
 */
export interface GiphyRendition {
  url?: string;
  width?: string;
  height?: string;
  size?: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
  frames?: string;
}

/**
 * Images object with multiple available renditions
 */
export interface GiphyImages {
  fixed_height?: GiphyRendition;
  fixed_height_still?: GiphyRendition;
  fixed_height_downsampled?: GiphyRendition;
  fixed_width?: GiphyRendition;
  fixed_width_still?: GiphyRendition;
  fixed_width_downsampled?: GiphyRendition;
  fixed_height_small: GiphyRendition;
  fixed_height_small_still?: GiphyRendition;
  fixed_width_small?: GiphyRendition;
  fixed_width_small_still?: GiphyRendition;
  downsized?: GiphyRendition;
  downsized_still?: GiphyRendition;
  downsized_large?: GiphyRendition;
  downsized_medium?: GiphyRendition;
  downsized_small?: GiphyRendition;
  original: GiphyRendition;
  original_still?: GiphyRendition;
  looping?: GiphyRendition;
  preview?: GiphyRendition;
  preview_gif?: GiphyRendition;
}

/**
 * Main GIF/Sticker object from the Giphy API
 */
export interface GiphyStickerRaw {
  type?: string;
  id: string;
  slug?: string;
  url?: string;
  bitly_url?: string;
  embed_url?: string;
  username?: string;
  source?: string;
  title: string;
  rating?: string;
  content_url?: string;
  user?: User;
  source_tld?: string;
  source_post_url?: string;
  update_datetime?: string;
  create_datetime?: string;
  import_datetime?: string;
  trending_datetime?: string;
  images: GiphyImages;
  alt_text?: string;
  is_low_contrast?: boolean;
}