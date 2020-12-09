const mongoose = require('mongoose');

require('../models/Rua');
const Rua = mongoose.model('Rua');

module.exports = {
  async store(req, res) {
    const street = await Rua.create(req.body);

    return res.json(street);
  }
};