"use strict";
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define("Rule", {
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minX: DataTypes.INTEGER,
    maxX: DataTypes.INTEGER,
    minY: DataTypes.INTEGER,
    maxY: DataTypes.INTEGER,
    minCopies: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxCopies: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Rule.belongsTo(models.Mosaic);
        Rule.belongsTo(models.Mosaic, {as: 'ChildMosaic'});
      }
    }
  });
  return Rule;
};
