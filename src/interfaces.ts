export interface WorkflowRun {
  id: string;
  status: string;
  createdAt: string;
  dateStarted: string;
  dateEnded: string;
  logs: string;
  errorLogs: string;
  payload: string;
}
