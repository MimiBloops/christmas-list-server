'use strict';
module.exports = function (app) {
    var accessory = require('../controller/accessoryController');

    app.route('/accessory')
        .get(accessory.list_all_accessory)
        .post(accessory.create_a_accessory);

    app.route('/accessory/:accessoryId')
        .get(accessory.read_a_accessory)
        .put(accessory.update_a_accessory)
        .delete(accessory.delete_a_accessory);
};
