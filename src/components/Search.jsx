import React, { useCallback, useContext, useEffect, useState } from 'react'
import '../styles/search.css'
import searchImg from '../assets/Frame.png'
import { debounce } from 'lodash';
import { AppContext } from '../components/Context'
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const Search = () => {
    const {search, setSearch} = useContext(AppContext);

  return (
      <div className='search-comp'>
        
        <div className='search'>
          <input type='text' placeholder='Search Song, Artist' value={search} onChange={e=>{setSearch(e.target.value)}} on/>
          <img src={searchImg} alt='search-logo' className='search-logo'/>
        </div>
        </div>
    
  )
}

export default Search