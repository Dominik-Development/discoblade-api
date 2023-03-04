import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './lib/Logging';
import MiddleWare from './util/Middleware';
import HealthCheck from './util/Healthcheck';

const router = express();

const middleware = new MiddleWare(router);

mongoose
    .connect(config.mongo.url, { w: 'majority', retryWrites: true })
    .then(() => {
        Logging.request('Connected to database');
        middleware.connect();
        HealthCheck(router);
    })
    .catch((error) => {
        Logging.error(error);
    });
