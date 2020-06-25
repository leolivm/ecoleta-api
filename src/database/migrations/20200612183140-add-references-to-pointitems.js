"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("point_items", "item_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "items", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("point_items", "item_id", {
      type: Sequelize.INTEGER,
    });
  },
};
