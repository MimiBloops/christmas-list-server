'use strict';
module.exports = function (app) {
    var buyer = require('../controller/buyerController.js');

    app.route('/buyer')
        .get(buyer.list_all_buyer)
        .post(buyer.create_a_buyer);

    app.route('/buyer/:buyerId')
        .get(buyer.read_a_buyer)
        .put(buyer.update_a_buyer)
        .delete(buyer.delete_a_buyer);
};
