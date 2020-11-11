import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };

// Redux thunk allows actions to return a function!
// export const fetchPosts = () => {
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({
//             type: 'FETCH_POST',
//             payload: response 
//         });
//     };

// };

// Refactored
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POST', payload: response });
};
