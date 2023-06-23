# Argil SDK for JavaScript

This is the JavaScript SDK for the Argil API. It provides a convenient way to interact with the API from JavaScript applications.

## Installation

You can install the SDK with npm:

```bash
npm install argil-sdk-js
```

## Usage

Here's an example of how to use the SDK:

```
import { ArgilSdk } from 'argil-sdk-ts';

const argilSdk = new ArgilSdk(ARGIL_API_KEY);

async function runWorkflow(id: string, input: any) {
  try {
    const response: any = await argilSdk.workflows.run(id, input);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function listWorkflowRuns() {
  try {
    const response: any[] = await argilSdk.workflowRuns.list();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getWorkflowRun(id: string) {
  try {
    const response: any = await argilSdk.workflowRuns.get(id);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

runWorkflow(YOUR_WORKFLOW_ID, INPUT_ASSOCIATED_TO_YOUR_WORKFLOW);
listWorkflowRuns();
getWorkflowRun(YOUR_WORKFLOWRUN_ID);

```
