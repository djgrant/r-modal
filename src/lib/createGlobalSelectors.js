export default selectorsByState =>
  Object.keys(selectorsByState).reduce((stateFields, stateField) =>
    Object.assign(
      stateFields,
      Object.keys(selectorsByState[stateField]).reduce((selectors, selector) =>
        Object.assign(selectors, {
          [selector]: (state, ...args) =>
            selectorsByState[stateField][selector](state[stateField], ...args)
        }),
        {}
      )
    ),
    {}
  );
