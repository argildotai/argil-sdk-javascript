import axios, { AxiosResponse } from 'axios';
import { WorkflowRun } from './interfaces';

const config = require('../config.json');

export class WorkflowRuns {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiUrl = config.apiUrl;
  }

  async list(): Promise<WorkflowRun[]> {
    try {
      const response: AxiosResponse = await axios.get(`${this.apiUrl}/getWorkflowRuns`, {
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
      const response: AxiosResponse = await axios.get(`${this.apiUrl}/getWorkflowRun/${id}`, {
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
