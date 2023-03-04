"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class WebhookHandler {
    id;
    token;
    content;
    constructor(id, token, content) {
        this.id = id;
        this.token = token;
        this.content = content;
        return this;
    }
    async send() {
        await (0, axios_1.default)({
            method: 'post',
            url: `https://discord.com/api/webhooks/${this.id}/${this.token}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: this.content
        }).then((data) => {
            return data;
        });
    }
    catch(err) {
        console.log(err);
    }
}
exports.default = WebhookHandler;
