import React, { useEffect, useState } from 'react';
import {Search,
} from 'carbon-components-react';

const SearchByEGN = ({initialSearchTerm, callback_getSearchTerm}) => {

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [shouldSkipSearch, setSkipSearch] = useState(initialSearchTerm?0:1);

  const search = () => {
      if (searchTerm)
        callback_getSearchTerm(searchTerm)
      else
        callback_getSearchTerm('')
    }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // send Axios request here
      if (shouldSkipSearch)  // we skip search at initial load
        setSkipSearch(0);
      else {
        search();
      }
    }, 2000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div >
      <Search
        id="egn-search"
        labelText="Търсене по ЕГН"
        onChange={(e) => { setSearchTerm(e.target.value) }}
        placeHolderText="Търсене по ЕГН..."
        value={searchTerm}
      />
    </div>
  )
}

export default SearchByEGN;