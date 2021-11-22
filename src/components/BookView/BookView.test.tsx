import React from 'react';
import { render, screen } from '@testing-library/react';

import BookView from './BookView';

const book =  <BookView authors={["Jon","Doe"]} categories={["Any","category"]} description="awersome book" imageLinks={ {smallThumbnail: "No", thumbnail:"image"} } industryIdentifiers={[{identifier: "No", type: "id"}]} pageCount={300} publishedDate={"1984"} publisher={"Me"} title={"Book"} />

describe('Search component works', () => {
 it('should render correctly', ()=>{
render(book)
    expect(screen.getByText("Book")).toBeInTheDocument();
    expect(screen.getByText("Any,category")).toBeInTheDocument();
    expect(screen.getByText("Jon Doe")).toBeInTheDocument();
    expect(screen.getByText("Me")).toBeInTheDocument();

 })
})
 describe("it should be used to test snapshots", () => {

  it("should mach the snapshot", () =>{
   render(book)
 expect(book).toMatchSnapshot();
  })
 })