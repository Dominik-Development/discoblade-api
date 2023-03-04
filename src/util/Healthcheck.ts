import { Router } from 'express';

export default function Healthcheck(router: Router) {
    router.get('/ping', (req: any, res: any | string, next: any) => res.status(200).json({ message: 'pong' }));
}
