/**
 * User object associated with a Giphy GIF/Sticker
 * Contains profile information and user asset URLs
 */
export interface User {
  avatar_url?: string;
  banner_url?: string;
  profile_url?: string;
  username: string;
  display_name?: string;
}