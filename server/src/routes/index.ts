import express from 'express';
import ClassController from '../controllers/ClassesController';
import ConnectionsController from '../controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassController();
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

const connectionsController = new ConnectionsController();
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
