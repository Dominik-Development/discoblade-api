import axios from 'axios';

export default class WebhookHandler {
    id: string | number;
    token: string;
    content: object;
    constructor(id: string | number, token: string, content: object) {
        this.id = id;
        this.token = token;
        this.content = content;
    }

    async send() {
        await axios({
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
    catch(err: string) {
        console.log(err);
    }
}
