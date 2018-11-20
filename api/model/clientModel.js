'user strict';
var sql = require('./database');

//Task object constructor
var Client = function (client) {
    this.Lastname = client.Lastname;
    this.Firstname = client.Firstname;
    this.Password = client.Password;
};
Client.createClient = function createClient(newClient, result) {
    sql.query("INSERT INTO Client set ?", newClient, function (err, res) {

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
Client.getClientById = function getClientById(clientId, result) {
    sql.query("Select Lastname, Firstname, Password from Client where id = ? ", clientId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Client.getAllClient = function getAllClient(result) {
    sql.query("Select * from Client", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
Client.updateById = function (id, client, result) {
    sql.query("UPDATE Client SET Lastname = ?, Firstname = ?, Password = ? WHERE id = ?", [client.Lastname, client.Firstname, client.Password, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Client.remove = function (id, result) {
    sql.query("DELETE FROM Client WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Client;