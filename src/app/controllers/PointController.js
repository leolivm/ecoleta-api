import Point from "../models/Point";
import Item from "../models/Item";
import PointItem from "../models/PointItem";

class PointController {
  async store(req, res) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;
    const image = req.file.filename;

    const points = await Point.create({
      name,
      email,
      image,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    });

    const pointItems = items
      .split(",")
      .map((item) => Number(item.trim()))
      .map((item_id) => {
        return {
          item_id,
          point_id: points.dataValues.id,
        };
      });

    async function getPoints(item) {
      if (item === undefined) return;
      const a = await PointItem.create(item);
      return a.dataValues;
    }

    const serialized = {
      points,
      image: `http://192.168.0.107:3333/uploads/${image}`,
    };

    const result = pointItems.map(async (item) => getPoints(item));
    const point_items = await Promise.all(result);

    return res.status(200).json([serialized, point_items]);
  }

  async show(req, res) {
    const point = await Point.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!point) return res.status(400).json({ error: "Point not found." });

    const serialized = {
      point,
      image: `http://192.168.0.107:3333/uploads/${point.image}`,
    };

    const items = await PointItem.findAll({
      where: { point_id: req.params.id },
      attributes: {
        exclude: ["id", "point_id", "item_id", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Item,
          attributes: { exclude: ["id", "image", "createdAt", "updatedAt"] },
        },
      ],
    });

    return res.status(200).json({ point: serialized, items });
  }

  async index(req, res) {
    const { city, uf, items } = req.query;

    if (items === NaN) return;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await PointItem.findAll({
      where: { item_id: parsedItems },
      attributes: {
        exclude: ["id", "point_id", "item_id", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Point,
          where: [{ city: String(city) }, { uf: String(uf) }],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    //filtragem para não trazer objetos iguais
    const filteredArr = points.reduce((acc, current) => {
      const x = acc.find((item) => item.Point.id === current.Point.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    const serialized = filteredArr.map((point) => {
      return {
        id: point.Point.id,
        name: point.Point.name,
        image: `http://192.168.0.107:3333/uploads/${point.Point.image}`,
        email: point.Point.email,
        whatsapp: point.Point.whatsapp,
        latitude: point.Point.latitude,
        longitude: point.Point.longitude,
        city: point.Point.city,
        uf: point.Point.uf,
      };
    });

    return res.json(serialized);
  }
}

export default new PointController();
