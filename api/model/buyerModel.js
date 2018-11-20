'user strict';
var sql = require('./database');

//Task object constructor
var Buyer = function (buyer) {
    this.Lastname = buyer.Lastname;
    this.Firstname = buyer.Firstname;
    this.Password = buyer.Password;
};
Buyer.createBuyer = function createBuyer(newBuyer, result) {
    sql.query("INSERT INTO Buyer set ?", newBuyer, function (err, res) {

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
Buyer.getBuyerById = function getBuyerById(buyerId, result) {
    sql.query("Select Lastname, Firstname, Password from Buyer where id = ? ", buyerId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Buyer.getAllBuyer = function getAllBuyer(result) {
    sql.query("Select * from Buyer", function (err, res) {

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
Buyer.updateById = function (id, buyer, result) {
    sql.query("UPDATE Buyer SET Lastname = ?, Firstname = ?, Password = ? WHERE id = ?", [buyer.Lastname, buyer.Firstname, buyer.Password, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Buyer.remove = function (id, result) {
    sql.query("DELETE FROM Buyer WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Buyer;