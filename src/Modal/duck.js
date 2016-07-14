import { lockPage, unlockPage } from '../Page/duck';

export const declareModal = id => ({
  type: 'DECLARE_MODAL',
  id: id
});

export const closeModal = () => dispatch => {
  dispatch(unlockPage());
  dispatch({
    type: 'CLOSE_MODAL'
  });
};

export const openModal = id => dispatch => {
  dispatch(lockPage());
  dispatch({
    type: 'OPEN_MODAL',
    id
  });
};

export const initialModalsState = [];

export const initialModalState = id => ({
  id,
  open: false
});

export const modal = (state, action) => {
  if (action.type === 'OPEN_MODAL' && state.id === action.id) {
    return Object.assign({}, state, {
      open: true
    });
  }
  if (action.type === 'CLOSE_MODAL') {
    return Object.assign({}, state, {
      open: false
    });
  }
  return state;
};

export default (state = initialModalsState, action) => {
  if (action.type === 'DECLARE_MODAL') {
    return [...state, initialModalState(action.id)];
  }
  return state.map(m => modal(m, action));
};

export const selectors = {
  isOpen: (state, id) => {
    return !!state.length && state.filter(m => m.id === id)[0].open;
  }
};
