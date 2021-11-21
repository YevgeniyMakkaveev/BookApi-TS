import IBookPreview from './bookPreview'
interface IBookState {
  name: string;
  field: string;
  priority: string;
  total: number;
  loading: boolean;
  books: IBookPreview[] | [];
  errorMsg: string | null;
}
export default IBookState