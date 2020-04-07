import axios from 'axios';
import { API_URL, API_PATH, COLLECTION_SIZE } from '../shared/constants';

const fetchPosts = async (subreddit) => {
  try {
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0];
    const URL = `${API_URL}${API_PATH}?subreddit=${subreddit}&sort_type=score&sort=desc&size=${COLLECTION_SIZE}&after=${date}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export default fetchPosts;
