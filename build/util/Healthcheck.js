"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Healthcheck(router) {
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));
}
exports.default = Healthcheck;
