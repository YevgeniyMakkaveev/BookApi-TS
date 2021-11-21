import ISingleBookState from "./singleBookState";
import IBookState from './booksState'

interface IReducerState {
singleBook: ISingleBookState;
books: IBookState;
}
export default IReducerState

