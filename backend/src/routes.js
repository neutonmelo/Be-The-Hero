const express = require('express');
const OngController = require("./controllers/OngController");
const IncidentsControoler = require("./controllers/IncidentController");
const ProfileControoler = require("./controllers/ProfileController");
const SessionControler = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionControler.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileControoler.index);

routes.get("/incidents", IncidentsControoler.index);
routes.post("/incidents", IncidentsControoler.create);
routes.delete("/incidents/:id", IncidentsControoler.delete);

module.exports = routes;