import axios from 'axios';

export class Workflows {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async run(id, input) {
        try {
            const response = await axios.post(`https://argil.ai/runWorkflow`, { id, input }, {
                headers: {
                    'authorization': this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
