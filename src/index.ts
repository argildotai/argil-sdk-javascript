import { Workflows } from './workflows';
import { WorkflowRuns } from './workflowRuns';

export class ArgilSdk {
  public workflows: Workflows;
  public workflowRuns: WorkflowRuns;

  constructor(apiKey: string) {
    this.workflows = new Workflows(apiKey);
    this.workflowRuns = new WorkflowRuns(apiKey);
  }
}
