"use strict";
module.exports = function(sequelize, DataTypes) {
  var Mosaic = sequelize.define("Mosaic", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { is: /^[a-z0-9_\-]+$/ }
    },
    width: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: { min: 1 }
    },
    height: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: { min: 1 }
    },
    atomic: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    content: DataTypes.TEXT,
    topLevel: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Mosaic.hasMany(models.Rule);
      }
    }
  });
  return Mosaic;
};
