import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI: string = process.env.MONGOURI || 'localhost:1337';

const SERVER_PORT: number = process.env.PORT ? Number(process.env.PORT) : 1337;

export const config = {
    mongo: {
        url: MONGO_URI
    },
    server: {
        port: SERVER_PORT
    }
};
