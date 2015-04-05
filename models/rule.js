"use strict";
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define("Rule", {
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minX: {
        field: "min_x",
        type: DataTypes.INTEGER
    },
    maxX: {
        field: "max_x",
        type: DataTypes.INTEGER
    },
    minY: {
        field: "min_y",
        type: DataTypes.INTEGER
    },
    maxY: {
        field: "max_y",
        type: DataTypes.INTEGER
    },
    minCopies: {
        field: "min_copies",
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxCopies: {
        field: "max_copies",
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
