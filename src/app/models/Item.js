import Sequelize, { Model } from "sequelize";

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        image: Sequelize.STRING,
        title: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Item;
