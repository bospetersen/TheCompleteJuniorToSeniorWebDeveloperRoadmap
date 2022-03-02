import * as React from 'react';
interface ISearch {
  searchChange: string|any;
}
const SearchBox = ({ searchChange }: ISearch) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;