const path = require('path');

const readImgApp = (req, res) => {
  const { app_name, img_name } = req.params;

  res.sendFile(path.join(__dirname, '../img/app', app_name, img_name));
};

module.exports = { readImgApp };
