import axios, { AxiosResponse } from 'axios';
import { WorkflowRun } from './interfaces';

export class Workflows {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async run(id: string, input: any): Promise<WorkflowRun> {
    try {
      const response: AxiosResponse = await axios.post(
        `https://argil.ai/runWorkflow`,
        {id, input},
        {
          headers: {
            'authorization': `Bearer ${this.apiKey}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
