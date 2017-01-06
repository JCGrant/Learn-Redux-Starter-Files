function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log("Adding comment");
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
  }
  return state;
}

const comments = (state=[], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
};

export default comments;
