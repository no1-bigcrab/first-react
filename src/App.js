import React, { useState } from 'react';
import UseBookSearch from './UseBookSearch';

export default function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  UseBookSearch(query, pageNumber);

  function handelSearch(e){
      setQuery(e.target.value);
      setPageNumber(1);

  }

  return (
    <>
      <input type="text" name="" id="" onChange={handelSearch}></input>
      <div>Title</div>
      <div>Title</div>

      <div>Title</div>

      <div>Title</div>


    </>
  );
}

