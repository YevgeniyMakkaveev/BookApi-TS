interface IBookPreview {
  volumeInfo: IVolumeInfo;
  selfLink: string;
  id: string;
}

export interface IVolumeInfo {
  title: string;
  description: string;
  publisher: string;
  publishedDate: string;
  categories: string[];
  authors: string[];
  imageLinks: IImageLinks;
  pageCount: number;
}
export interface IImageLinks {
  thumbnail: string;
  smallThumbnail: string;
}
export default IBookPreview;
