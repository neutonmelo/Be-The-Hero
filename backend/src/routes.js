const express = require('express');
const { celebrate, Segments, Joi } = require("celebrate");


const OngController = require("./controllers/OngController");
const IncidentsControoler = require("./controllers/IncidentController");
const ProfileControoler = require("./controllers/ProfileController");
const SessionControler = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionControler.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileControoler.index);

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsControoler.index);
routes.post("/incidents", IncidentsControoler.create);
routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentsControoler.delete);

module.exports = routes;