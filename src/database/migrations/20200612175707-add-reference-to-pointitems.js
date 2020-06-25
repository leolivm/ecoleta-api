"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("point_items", "point_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "points", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("point_items", "point_id", {
      type: Sequelize.INTEGER,
    });
  },
};
