import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './lib/Logging';
import MiddleWare from './util/Middleware';

const router = express();

const middleware = new MiddleWare(router);

mongoose
    .connect(config.mongo.url, { w: 'majority', retryWrites: true })
    .then(() => {
        Logging.info('Connected to database');
        middleware.connect();
    })
    .catch((error) => {
        Logging.error(error);
    });
