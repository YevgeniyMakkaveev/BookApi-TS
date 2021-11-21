import { IImageLinks } from "../types/bookPreview";
import defaultImg from '../imgs/book-template.png'

const getImage=(img:IImageLinks, getSmall:boolean)=>{
 if (img) {
      if (img.thumbnail) return img.thumbnail;
      else if (img.smallThumbnail&&getSmall) return img.smallThumbnail;
    } else return defaultImg;
}
export default getImage;