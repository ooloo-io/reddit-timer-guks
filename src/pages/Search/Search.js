import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import Spinner from '../../components/Spinner/Spinner';
import { SearchPage } from './Search.styles';

const Search = () => (
  <SearchPage>
    <SearchForm />
    <Spinner />
  </SearchPage>
);


export default Search;
