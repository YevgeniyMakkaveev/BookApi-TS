import IBookView from './bookView'
interface ISingleBookState {
  data: IBookView | null;
  id: string|null
  loading: boolean;
  errorMsg: string | null;
}
export default ISingleBookState