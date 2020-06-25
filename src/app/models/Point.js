import Sequelize, { Model } from "sequelize";

class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        image: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Point;
