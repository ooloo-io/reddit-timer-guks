import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import fetchPosts from '../../api/fetchPosts';
import SearchForm from '../../components/SearchForm/SearchForm';
import Spinner from '../../components/Spinner/Spinner';
import { SearchPage } from './Search.styles';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [subreddit, setSubreddit] = useQueryParam('q', StringParam);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetchPosts(subreddit);
      setLoading(false);
    };
    fetchData();
  }, [subreddit]);

  return (
    <SearchPage>
      <SearchForm subreddit={subreddit} setSubreddit={setSubreddit} />
      {loading && <Spinner />}
    </SearchPage>
  );
};

export default Search;
