const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth');
const SessionController = require('./app/controller/SessionController');

routes.post('/sessions', SessionController.insert);

routes.use(authMiddleware);
routes.get('/dashboard', (req, res) => {
	return res.status(200).send();
});

module.exports = routes;