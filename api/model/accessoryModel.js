'user strict';
var sql = require('./database');

//Task object constructor
var Accessory = function (accessory) {
    this.Name = accessory.Name;
    this.Price = accessory.Price;
    this.PurchaseLink = accessory.PurchaseLink;
    this.Image = accessory.Image;
};
Accessory.createAccessory = function createAccessory(newAccessory, result) {
    sql.query("INSERT INTO Accessory set ?", newAccessory, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Accessory.getAccessoryById = function getAccessoryById(accessoryId, result) {
    sql.query("Select Name, Price, PurchaseLink, Image from Accessory where id = ? ", accessoryId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Accessory.getAllAccessory = function getAllAccessory(result) {
    sql.query("Select * from Accessory", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('accessory : ', res);

            result(null, res);
        }
    });
};
Accessory.updateById = function (id, accessory, result) {
    sql.query("UPDATE Accessory SET Name = ?, Price = ?, PurchaseLink = ?, Image = ? WHERE id = ?", [accessory.Name, accessory.Price, accessory.PurchaseLink, accessory.Image, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Accessory.remove = function (id, result) {
    sql.query("DELETE FROM Accessory WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Accessory;