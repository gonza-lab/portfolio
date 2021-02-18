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

export default { toggleNav, toggleGetData, toggleGetApps, toggleSendMail };
