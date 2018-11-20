'use strict';

var Buyer = require('../model/buyerModel.js');

exports.list_all_buyer = function (req, res) {
    Buyer.getAllBuyer(function (err, buyer) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', buyer);
        res.send(buyer);
    });
};



exports.create_a_buyer = function (req, res) {
    var new_buyer = new Buyer(req.body);

    //handles null error 
    if (!new_buyer.Lastname || !new_buyer.Firstname) {

        res.status(400).send({ error: true, message: 'Please provide buyer' });

    }
    else {

        Buyer.createBuyer(new_buyer, function (err, buyer) {

            if (err)
                res.send(err);
            res.json(buyer);
        });
    }
};


exports.read_a_buyer = function (req, res) {
    Buyer.getBuyerById(req.params.buyerId, function (err, buyer) {
        if (err)
            res.send(err);
        res.json(buyer);
    });
};


exports.update_a_buyer = function (req, res) {
    Buyer.updateById(req.params.buyerId, new Buyer(req.body), function (err, buyer) {
        if (err)
            res.send(err);
        res.json(buyer);
    });
};


exports.delete_a_buyer = function (req, res) {
    Buyer.remove(req.params.buyerId, function (err, buyer) {
        if (err)
            res.send(err);
        res.json({ message: 'Buyer successfully deleted' });
    });
};