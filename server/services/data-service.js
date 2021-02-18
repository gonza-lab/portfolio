const Data = require('../model/Data');

const read = async () => {
  return await Data.find({});
};

module.exports = { read };
