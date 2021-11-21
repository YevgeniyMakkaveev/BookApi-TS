import {IVolumeInfo} from './bookPreview'
interface IBookView extends IVolumeInfo{
 industryIdentifiers: Identifiers[]
}

interface Identifiers{
 type: string
 identifier: string
}

export default IBookView;