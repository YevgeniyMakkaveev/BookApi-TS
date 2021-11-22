interface IBookPreview {
  volumeInfo: IVolumeInfo;
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
