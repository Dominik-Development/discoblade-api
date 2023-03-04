"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGOURI || 'localhost:1337';
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 1337;
exports.config = {
    mongo: {
        url: MONGO_URI
    },
    server: {
        port: SERVER_PORT
    }
};
