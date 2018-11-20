'use strict';

var Client = require('../model/client.js');

exports.list_all_client = function (req, res) {
    Client.getAllClient(function (err, client) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', client);
        res.send(client);
    });
};



exports.create_a_client = function (req, res) {
    var new_client = new Client(req.body);

    //handles null error 
    if (!new_client.Lastname || !new_client.Firstname) {

        res.status(400).send({ error: true, message: 'Please provide client' });

    }
    else {

        Client.createClient(new_client, function (err, client) {

            if (err)
                res.send(err);
            res.json(client);
        });
    }
};


exports.read_a_client = function (req, res) {
    Client.getClientById(req.params.clientId, function (err, client) {
        if (err)
            res.send(err);
        res.json(client);
    });
};


exports.update_a_client = function (req, res) {
    Client.updateById(req.params.clientId, new Client(req.body), function (err, client) {
        if (err)
            res.send(err);
        res.json(client);
    });
};


exports.delete_a_client = function (req, res) {
    Client.remove(req.params.clientId, function (err, client) {
        if (err)
            res.send(err);
        res.json({ message: 'Client successfully deleted' });
    });
};