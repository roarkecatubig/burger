var orm = require('../config/orm.js')

// Code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    insertOne: function (burgerInput, cb) {
        orm.insertOne(burgerInput, function(res) {
            cb(res);
        });
    },

    updateOne: function (colName, colValue, condition, conditionValue, cb) {
        orm.updateOne(colName, colValue, condition, conditionValue, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;