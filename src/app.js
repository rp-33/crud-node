'use strict';

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import router from './routes';
import configuration from './configuration';
import bodyParser  from 'body-parser';

global.config = configuration;

const app = express();

app.set('port',config.server.port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

router(app);


export default app