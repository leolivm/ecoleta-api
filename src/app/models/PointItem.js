import Sequelize, { Model } from "sequelize";

class PointItem extends Model {
  static init(sequelize) {
    super.init(
      {
        point_id: Sequelize.INTEGER,
        item_id: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Item, { foreignKey: "item_id" });
    this.belongsTo(models.Point, { foreignKey: "point_id" });
  }
}

export default PointItem;
