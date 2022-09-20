export const checkStatus = 'CHECK_STATUS';

const categoryReducer = (state = [], action) => {
  switch(action.type) {
    case checkStatus:
      return "Under construction";
    default: 
      return state;
  }
}

export default categoryReducer;