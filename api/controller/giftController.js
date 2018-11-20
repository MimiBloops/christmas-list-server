'use strict';

var Gift = require('../model/giftModel.js');

exports.list_all_gift = function (req, res) {
    Gift.getAllGift(function (err, gift) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', gift);
        res.send(gift);
    });
};



exports.create_a_gift = function (req, res) {
    var new_gift = new Gift(req.body);
    if (!new_gift.Name || !new_gift.Price) {
        res.status(400).send({ error: true, message: 'Please provide gift' });
    }
    else {
        Gift.createGift(new_gift, function (err, gift) {
            if (err)
                res.send(err);
            res.json(gift);
        });
    }
};


exports.read_a_gift = function (req, res) {
    Gift.getGiftById(req.params.giftId, function (err, gift) {
        if (err)
            res.send(err);
        res.json(gift);
    });
};


exports.update_a_gift = function (req, res) {
    Gift.updateById(req.params.giftId, new Gift(req.body), function (err, gift) {
        if (err)
            res.send(err);
        res.json(gift);
    });
};


exports.delete_a_gift = function (req, res) {
    Gift.remove(req.params.giftId, function (err, gift) {
        if (err)
            res.send(err);
        res.json({ message: 'Gift successfully deleted' });
    });
};