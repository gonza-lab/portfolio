const { NotFound } = require('../errors/errors');
const App = require('../model/App');

const read = async () => {
  const apps = await App.find({});
  return apps;
};

const readByAppName = async (appName) => { 
	const app = await App.findOne({ app: appName });

	if(!app) {
		throw new NotFound();
	}

	return app;
}

module.exports = { read, readByAppName };
