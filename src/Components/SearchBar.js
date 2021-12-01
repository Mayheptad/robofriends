import React  from 'react';

const SearchBar = ({handleChange}) => {
    return (
        <div>
            <input placeholder='Search robots' onChange={handleChange} type='search' className='ma2 pa2 ba b--green bg-lightest-blue' />
        </div>
    )
}

export default SearchBar;