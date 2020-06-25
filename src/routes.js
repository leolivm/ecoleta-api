import { Router } from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";
import ItemController from "./app/controllers/ItemController";
import PointController from "./app/controllers/PointController";

const routes = new Router();
const upload = multer(multerConfig);

routes.get("/items", ItemController.index);

routes.get("/points", PointController.index);
routes.get("/points/:id", PointController.show);
routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  PointController.store
);

export default routes;
