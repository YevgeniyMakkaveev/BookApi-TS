import { IImageLinks } from "../types/bookPreview";
import defaultImg from '../imgs/book-template.png'

const getImage=(img:IImageLinks)=>{
 if (img) {
      if (img.thumbnail) return img.thumbnail;
      else if (img.smallThumbnail) return img.smallThumbnail;
    } else return defaultImg;
}
export default getImage;