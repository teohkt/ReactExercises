//  const postReducer = (state = [], action) => {
//     // if (action.type === 'FETCH_POST') {
//     //     return action.payload;
//     // }
//     // return state;

//     // This is better syntax for reducers
//     switch (action.type) {
//         case 'FETCH_POSTS':
//             return action.payload;
//         default:
//             return state;
//     };
// };

// export default postReducer;

export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      default:
        return state;
    }
  };
  