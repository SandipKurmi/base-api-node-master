/* import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

export default router; */

import express from 'express';
import userRoutes from './userRoute';
import postRoute from './postRoute';
import employeeRoute from './employeeRoute';
import actorRoute from './actorRoute'


const router = express.Router();


userRoutes(router);
postRoute(router);
employeeRoute(router);
actorRoute(router);

export default router;