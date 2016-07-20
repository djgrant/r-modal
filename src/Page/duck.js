export const lockPage = () => ({ type: 'LOCK_PAGE' });
export const unlockPage = () => ({ type: 'UNLOCK_PAGE' });

export const initialState = {
  locked: false
};

export const pageReducer = (state = initialState, action) => {
  if (action.type === 'LOCK_PAGE') {
    return { locked: true };
  }
  if (action.type === 'UNLOCK_PAGE') {
    return { locked: false };
  }
  return state;
};

export const pageSelectors = {
  isLocked: function(state) {
    return state.locked;
  }
};
