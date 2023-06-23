import Workflows from './workflows';
import WorkflowRuns from './workflowRuns';

class ArgilSdk {
  constructor(apiKey) {
    this.workflows = new Workflows(apiKey);
    this.workflowRuns = new WorkflowRuns(apiKey);
  }
}

export default ArgilSdk;
