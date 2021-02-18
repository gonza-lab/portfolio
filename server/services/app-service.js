const App = require('../model/App');

const read = async () => {
  const apps = await App.find({});
  return apps;
};

module.exports = { read };
