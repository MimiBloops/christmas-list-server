'user strict';
var sql = require('./database');

//Task object constructor
var Gift = function (gift) {
    this.Name = gift.Name;
    this.Price = gift.Price;
    this.PurchaseLink = gift.PurchaseLink;
    this.Image = gift.Image;
};
Gift.createGift = function createGift(newGift, result) {
    sql.query("INSERT INTO Gift set ?", newGift, function (err, res) {

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
Gift.getGiftById = function getGiftById(giftId, result) {
    sql.query("Select Name, Price, PurchaseLink, Image from Gift where id = ? ", giftId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Gift.getAllGift = function getAllGift(result) {
    sql.query("Select * from Gift", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('buyer : ', res);

            result(null, res);
        }
    });
};
Gift.updateById = function (id, gift, result) {
    sql.query("UPDATE Gift SET Name = ?, Price = ?, PurchaseLink = ?, Image = ? WHERE id = ?", [gift.Name, gift.Price, gift.PurchaseLink, gift.Image, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Gift.remove = function (id, result) {
    sql.query("DELETE FROM Gift WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Gift;