import axios, { AxiosResponse } from 'axios';
import { WorkflowRun } from './interfaces';

export class WorkflowRuns {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async list(): Promise<WorkflowRun[]> {
    try {
      const response: AxiosResponse = await axios.get('https://argil.ai/getWorkflowRuns', {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async get(id: string): Promise<WorkflowRun> {
    try {
      const response: AxiosResponse = await axios.get(`https://argil.ai/getWorkflowRun/${id}`, {
        headers: {
          'authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
