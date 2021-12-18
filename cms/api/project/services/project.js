module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, populate) {
    return strapi.query('project').find({ ...params, public: true }, populate);
  },

	findOne(params, populate) {
    return strapi.query('project').findOne({ ...params, public: true }, populate);
  },
};

