// Imports the Google Cloud client library
import { ProjectsClient } from "@google-cloud/resource-manager";

// Creates a client
const client = new ProjectsClient();

async function quickstart() {
  // Lists current projects
  const projects = client.searchProjectsAsync();

  console.log("Projects:");

  for await (const project of projects) {
    console.info(project);
  }
}

quickstart();
