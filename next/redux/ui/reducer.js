import types from '../types';

const initialState = {
  isNavOpen: false,
  isGettingData: false,
  isGettingApps: false,
  isSendingMail: false,
  darkMode: false,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.uiToggleNav:
      return { ...state, isNavOpen: !state.isNavOpen };

    case types.uiToggleIsGettingApps:
      return { ...state, isGettingApps: !state.isGettingApps };

    case types.uiToggleIsGettingData:
      return { ...state, isGettingData: !state.isGettingData };

    case types.uiToggleIsSendingMail:
      return { ...state, isSendingMail: !state.isSendingMail };

    case types.uiSetDarkMode:
      return { ...state, darkMode: payload };

    default:
      return state;
  }
};
