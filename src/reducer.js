// reducer.js
const initialState = {
    users: [
      { id: 1, name: 'ayoub hadiq' },
      // Add more users as needed
    ],
    searchResult: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_USER':
        const searchResult = state.users.filter(user =>
          user.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          searchResult
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  