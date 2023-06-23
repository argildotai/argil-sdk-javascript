import axios, { AxiosResponse } from 'axios';
import { WorkflowRun } from './interfaces';

const config = require('../config.json');

export class Workflows {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiUrl = config.apiUrl;
  }

  async run(id: string, input: any): Promise<WorkflowRun> {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.apiUrl}/runWorkflow`,
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
