export const lockPage = () => ({ type: 'LOCK_PAGE', scrollY });
export const unlockPage = () => ({ type: 'UNLOCK_PAGE', scrollY });

export const initialState = {
  locked: false,
  scrollY: 0
};

export default function(state = initialState, action) {
  if (action.type === 'LOCK_PAGE') {
    return Object.assign({}, state, {
      locked: true,
      scrollY: action.scrollY
    });
  }
  if (action.type === 'UNLOCK_PAGE') {
    return Object.assign({}, state, {
      locked: false
    });
  }
  return state;
}

export const selectors = {
  getLocked: function(state) {
    return state.locked;
  },
  getScrollY: function(state) {
    return state.scrollY;
  }
};
