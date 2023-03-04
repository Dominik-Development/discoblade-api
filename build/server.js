"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const Logging_1 = __importDefault(require("./lib/Logging"));
const Middleware_1 = __importDefault(require("./util/Middleware"));
const Healthcheck_1 = __importDefault(require("./util/Healthcheck"));
const router = (0, express_1.default)();
const middleware = new Middleware_1.default(router);
mongoose_1.default
    .connect(config_1.config.mongo.url, { w: 'majority', retryWrites: true })
    .then(() => {
    Logging_1.default.request('Connected to database');
    middleware.connect();
    (0, Healthcheck_1.default)(router);
})
    .catch((error) => {
    Logging_1.default.error(error);
});
