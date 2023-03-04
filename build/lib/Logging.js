"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_advanced_1 = __importDefault(require("chalk-advanced"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const WebhookHandler_1 = __importDefault(require("../util/WebhookHandler"));
class Logging {
    static log = (args) => this.info(args);
    static request = (args) => {
        console.log(chalk_advanced_1.default.white(`[${new Date().toLocaleDateString()}] [INFO] `), typeof args === 'string' ? chalk_advanced_1.default.green(args) : args);
        const webhook = new WebhookHandler_1.default(process.env.REQUESTHOOKID || '', process.env.REQUESTHOOKTOKEN || '', {
            embeds: [
                {
                    color: 0,
                    title: 'REQUEST',
                    description: `<t:${(Date.now() / 1000) | 0}:R> ${typeof args === 'string' ? '**' + args + '**' : 'Request was not of type **string**'}`
                }
            ]
        });
        webhook.send();
    };
    static info = (args) => {
        console.log(chalk_advanced_1.default.white(`[${new Date().toLocaleDateString()}] [INFO] `), typeof args === 'string' ? chalk_advanced_1.default.green(args) : args);
        const webhook = new WebhookHandler_1.default(process.env.INFOHOOKID || '', process.env.INFOHOOKTOKEN || '', {
            embeds: [
                {
                    color: 5763719,
                    title: 'INFO',
                    description: `<t:${(Date.now() / 1000) | 0}:R> ${typeof args === 'string' ? '**' + args + '**' : 'Info was not of type **string**'}`
                }
            ]
        });
        webhook.send();
    };
    static warn = (args) => {
        console.log(chalk_advanced_1.default.white(`[${new Date().toLocaleDateString()}] [WARN] `), typeof args === 'string' ? chalk_advanced_1.default.yellow(args) : args);
        const webhook = new WebhookHandler_1.default(process.env.WARNHOOKID || '', process.env.WARNHOOKTOKEN || '', {
            embeds: [
                {
                    color: 16705372,
                    title: 'WARN',
                    description: `<t:${(Date.now() / 1000) | 0}:R> ${typeof args === 'string' ? '**' + args + '**' : 'Warn was not of type **string**'}`
                }
            ]
        });
        webhook.send();
    };
    static error = (args) => {
        console.log(chalk_advanced_1.default.white(`[${new Date().toLocaleDateString()}] [ERROR] `), typeof args === 'string' ? chalk_advanced_1.default.red(args) : args);
        const webhook = new WebhookHandler_1.default(process.env.ERRORHOOKID || '', process.env.ERRORHOOKTOKEN || '', {
            embeds: [
                {
                    color: 15548997,
                    title: 'ERROR',
                    description: `<t:${(Date.now() / 1000) | 0}:R> ${typeof args === 'string' ? '**' + args + '**' : 'Error was not of type **string**'}`
                }
            ]
        });
        webhook.send();
    };
}
exports.default = Logging;
