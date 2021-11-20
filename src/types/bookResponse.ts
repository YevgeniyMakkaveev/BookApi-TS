import IBookPreview from './bookPreview'

interface IBookRespose {
 totalItems: number;
 kind: string;
 items: IBookPreview[];
}
export default IBookRespose;