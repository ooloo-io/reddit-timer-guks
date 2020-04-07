import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormWrapper,
  Title,
  Form,
  Prefix,
} from './SearchForm.styles';
import Input from '../Input/Input';
import CTAButton from '../CTAButton/CTAButton';

const SearchForm = ({ subreddit, setSubreddit }) => {
  const [query, setQuery] = useState(subreddit);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(query);
  };

  return (
    <SearchFormWrapper>
      <Title>Find the best time for a subreddit</Title>
      <Form onSubmit={handleSubmit}>
        <Prefix>r /</Prefix>
        <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <CTAButton type="submit">Search</CTAButton>
      </Form>
    </SearchFormWrapper>
  );
};

SearchForm.propTypes = {
  subreddit: PropTypes.string.isRequired,
  setSubreddit: PropTypes.func.isRequired,
};

export default SearchForm;
