import Item from "../models/Item";

class ItemController {
  async index(req, res) {
    const items = await Item.findAll({ attributes: ["id", "image", "title"] });
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: `http://192.168.0.107:3333/uploads/${item.image}`,
      };
    });
    return res.json(serializedItems);
  }
}

export default new ItemController();
