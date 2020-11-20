import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // The chain statement replaces these 2 lines
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));

  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
};


export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// The underscore means that it is a private function. This set allows
// for the fetching of a repeated user once, instead of at each instance through memoize
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser =  _.memoize(async (id,dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });

// });

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};