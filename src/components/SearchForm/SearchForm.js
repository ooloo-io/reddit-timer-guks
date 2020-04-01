import React from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import {
  SearchFormWrapper,
  Title,
  Form,
  Prefix,
  Input,
} from './SearchForm.styles';

import { CTAButton } from '../CTAButton/CTAButton.styles';

const SearchForm = () => {
  const [subreddit, setSubreddit] = useQueryParam('q', StringParam);

  return (
    <SearchFormWrapper>
      <Title>Find the best time for a subreddit</Title>
      <Form>
        <Prefix>r /</Prefix>
        <Input type="text" value={subreddit} onChange={(e) => setSubreddit(e.target.value)} />
        <CTAButton type="submit">Search</CTAButton>
      </Form>
    </SearchFormWrapper>
  );
};

export default SearchForm;
