'use strict';

var Accessory = require('../model/accessoryModel');

exports.list_all_accessory = function (req, res) {
    Accessory.getAllAccessory(function (err, accessory) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', accessory);
        res.send(accessory);
    });
};



exports.create_a_accessory = function (req, res) {
    var new_accessory = new Accessory(req.body);
    if (!new_accessory.Name || !new_accessory.Price) {
        res.status(400).send({ error: true, message: 'Please provide accessory' });
    }
    else {
        Accessory.createAccessory(new_accessory, function (err, accessory) {
            if (err)
                res.send(err);
            res.json(accessory);
        });
    }
};


exports.read_a_accessory = function (req, res) {
    Accessory.getAccessoryById(req.params.accessoryId, function (err, accessory) {
        if (err)
            res.send(err);
        res.json(accessory);
    });
};


exports.update_a_accessory = function (req, res) {
    Accessory.updateById(req.params.accessoryId, new Accessory(req.body), function (err, accessory) {
        if (err)
            res.send(err);
        res.json(accessory);
    });
};


exports.delete_a_accessory = function (req, res) {
    Accessory.remove(req.params.accessoryId, function (err, accessory) {
        if (err)
            res.send(err);
        res.json({ message: 'Accessory successfully deleted' });
    });
};

exports.get_accessory_category = function (req, res) {
    Accessory.getAccessoryCategory(req.params.accessoryId, function (err, accessory) {
        if (err)
            res.send(err);
        res.json(accessory);
    });
};