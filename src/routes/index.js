import express from 'express';
import config from '../config';
import initializeDb from '../database/index';
import middleware from '../middleware';
import website from '../controller/website';
import account from '../controller/account';

let router = express();

// connect to db
initializeDb(db => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/)

  router.use('/', website({config, db}))
  router.use('/', account({config, db}))

});

export default router;
