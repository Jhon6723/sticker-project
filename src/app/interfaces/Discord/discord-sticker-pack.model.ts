import { DiscordSticker } from "./discord-sticker.model";

export interface StickerPack {
    id: string;
    stickers: DiscordSticker[];
    name: string;
    sku_id: string;
    cover_sticker_id: string;
    description: string;
    banner_asset_id: string;
}