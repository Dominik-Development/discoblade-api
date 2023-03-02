import express, { Router } from 'express';
import Logging from '../lib/Logging';

export default class MiddleWare {
    router: Router;
    constructor(router: Router) {
        if (!router) {
            throw new Error('No router passed in class');
        }
        this.router = router;
    }
    async connect() {
        console.log('uwu');
        this.router.use((req: any, res: any | string, next: any) => {
            Logging.info(`Incomming -> Method [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

            res.on('finish', () => {
                Logging.info(`Incomming -> Method [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
            });

            next();
        });
        this.router.use(express.urlencoded({ extended: true }));
        this.router.use(express.json());

        this.router.use((req: any, res: any, next: any) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

            if (req.method == 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
            }

            next();
        });
    }
}
