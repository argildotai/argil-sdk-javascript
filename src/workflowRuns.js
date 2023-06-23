import axios from 'axios';

export class WorkflowRuns {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async list() {
    try {
      const response = await axios.get('https://argil.ai/getWorkflowRuns', {
        headers: {
          'Authorization': this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await axios.get(`https://argil.ai/getWorkflowRun/${id}`, {
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
