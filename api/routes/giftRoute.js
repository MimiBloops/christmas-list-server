'use strict';
module.exports = function (app) {
    var gift = require('../controller/giftController.js');

    app.route('/gift')
        .get(gift.list_all_gift)
        .post(gift.create_a_gift);

    app.route('/gift/:giftId')
        .get(gift.read_a_gift)
        .put(gift.update_a_gift)
        .delete(gift.delete_a_gift);
};
