"use strict";
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define("Rule", {
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minX: {
        type: DataTypes.INTEGER
    },
    maxX: {
        type: DataTypes.INTEGER
    },
    minY: {
        type: DataTypes.INTEGER
    },
    maxY: {
        type: DataTypes.INTEGER
    },
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
        Rule.belongsTo(models.Mosaic, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: { name: 'mosaicId', allowNull: false }
        });
        Rule.belongsTo(models.Mosaic, {
            as: 'ChildMosaic',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            foreignKey: { name: 'childMosaicId', allowNull: false }
        });
      }
    }
  });
  return Rule;
};
