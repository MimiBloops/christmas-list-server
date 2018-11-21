'use strict';
module.exports = function (app) {
    var client = require('../controller/clientController.js');

    app.route('/client')
        .get(client.list_all_client)
        .post(client.create_a_client);

    app.route('/client/:clientId')
        .get(client.read_a_client)
        .put(client.update_a_client)
        .delete(client.delete_a_client);

    app.route('/client/:clientId/gift')
        .get(client.list_gift_client);
};
