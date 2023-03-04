"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Logging_1 = __importDefault(require("../lib/Logging"));
class MiddleWare {
    router;
    constructor(router) {
        if (!router) {
            throw new Error('No router passed in class');
        }
        this.router = router;
    }
    async connect() {
        this.router.use((req, res, next) => {
            Logging_1.default.info(`Incomming -> Method [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
            res.on('finish', () => {
                Logging_1.default.info(`Incomming -> Method [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
            });
            next();
        });
        this.router.use(express_1.default.urlencoded({ extended: true }));
        this.router.use(express_1.default.json());
        this.router.use((req, res, next) => {
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
exports.default = MiddleWare;
