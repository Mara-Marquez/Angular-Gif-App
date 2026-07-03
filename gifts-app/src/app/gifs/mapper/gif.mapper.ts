import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

import{GiphyStikerItem}from '../interfaces/stikerGiphy.interface';
import{Stiker}from '../interfaces/stiker.interface';
import { Title } from "@angular/platform-browser";
//la idea es recibir el objeto de giphy y regresemos objetode Gif
export class GifMapper{
    static mapGiphyItemToGif(item:GiphyItem):Gif{
        return{
            id:item.id,
            title:item.title,
            url:item.images.original.url
        }
    }

    static  mapGiphyItemsToGifArray(items:GiphyItem[]):Gif[]{
        return items.map(this.mapGiphyItemToGif);
    }
}

export class StikerMapper{
    static mapGiphyItemToStiker(item:GiphyStikerItem):Stiker{
        return{
        id:item.id,
        title:item.title,
         url:item.images.original.url
        }

    }

    static mapGiphyItemsToStikerfArray(items:GiphyStikerItem[]):Stiker[]{
         return items.map(this.mapGiphyItemToStiker);
    }
}