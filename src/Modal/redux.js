export const declareModal = id => ({
  type: 'REGISTER_MODAL',
  id
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL'
});

export const openModal = id => ({
  type: 'OPEN_MODAL',
  id
});

export const initialModalState = {
  open: false
};

export const modal = (state = initialModalState, action) => {
  if (action.type === 'OPEN_MODAL') {
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

export const reducer = (state = {}, action) => {
  if (action.type === 'REGISTER_MODAL') {
    return Object.assign({}, state, {
      [action.id]: modal(undefined, action)
    });
  }
  // If ID is provided only reduce that modal
  if (action.id && state[action.id]) {
    return Object.assign({}, state, {
      [action.id]: modal(state[action.id], action)
    });
  }
  // Otherwise, reduce all modals
  return [{}, ...Object.keys(state)].reduce((newState, id) =>
    Object.assign(newState, {
      [id]: modal(state[id], action)
    })
  );
};

export const selectors = {
  isOpen: (state, id) => {
    return !!state[id] && state[id].open;
  }
};
