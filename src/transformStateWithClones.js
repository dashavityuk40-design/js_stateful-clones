'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = { ...state };

  return actions.map((action) => {
    if (action.type === 'addProperties') {
      currentState = {
        ...currentState,
        ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      const newState = { ...currentState };

      action.keysToRemove.forEach((key) => {
        delete newState[key];
      });

      currentState = newState;
    }

    if (action.type === 'clear') {
      currentState = {};
    }

    return currentState;
  });
}

module.exports = transformStateWithClones;
