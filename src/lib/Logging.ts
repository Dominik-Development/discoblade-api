import chalk from 'chalk-advanced';
import dotenv from 'dotenv';

dotenv.config();

import WebhookHandler from '../util/WebhookHandler';

export default class Logging {
    public static log = (args: any) => this.info(args);
    public static request = (args: any) => {
        console.log(chalk.white(`[${new Date().toLocaleDateString()}] [INFO] `), typeof args === 'string' ? chalk.green(args) : args);
        const webhook = new WebhookHandler(process.env.REQUESTHOOKID || '', process.env.REQUESTHOOKTOKEN || '', {
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
    public static info = (args: any) => {
        console.log(chalk.white(`[${new Date().toLocaleDateString()}] [INFO] `), typeof args === 'string' ? chalk.green(args) : args);
        const webhook = new WebhookHandler(process.env.INFOHOOKID || '', process.env.INFOHOOKTOKEN || '', {
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
    public static warn = (args: any) => {
        console.log(chalk.white(`[${new Date().toLocaleDateString()}] [WARN] `), typeof args === 'string' ? chalk.yellow(args) : args);
        const webhook = new WebhookHandler(process.env.WARNHOOKID || '', process.env.WARNHOOKTOKEN || '', {
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
    public static error = (args: any) => {
        console.log(chalk.white(`[${new Date().toLocaleDateString()}] [ERROR] `), typeof args === 'string' ? chalk.red(args) : args);
        const webhook = new WebhookHandler(process.env.ERRORHOOKID || '', process.env.ERRORHOOKTOKEN || '', {
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
