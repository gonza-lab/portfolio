import types from '../types';

const toggleNav = () => ({
  type: types.uiToggleNav,
});

const toggleGetData = () => ({
  type: types.uiToggleIsGettingData,
});

const toggleGetApps = () => ({
  type: types.uiToggleIsGettingApps,
});

const toggleSendMail = () => ({
  type: types.uiToggleIsSendingMail,
});

const setDarkMode = (payload) => ({
  type: types.uiSetDarkMode,
  payload,
});

export default {
  toggleNav,
  toggleGetData,
  toggleGetApps,
  toggleSendMail,
  setDarkMode,
};
