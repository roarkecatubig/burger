var connection = require("./connection.js")

var orm = {

    selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
            throw err;
        } 
        cb(result)
    });

    },
    insertOne: function(burgerInput, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('?')";
        connection.query(queryString, [burgerInput], function(err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        });
    },
    updateOne: function(colName, colValue, condition, conditionValue, cb) {
        var queryString = "UPDATE burgers SET ?? = ? WHERE ? = ?";
        connection.query(queryString, [colName, colValue, condition, conditionValue], function(err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        });
    }
};

module.exports = orm;
