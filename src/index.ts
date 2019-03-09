#!/usr/bin/env node

import * as commander from 'commander';

const PROJECT_NAME = 's';

commander
  .name(PROJECT_NAME)
  .usage(`<command> [options]`)
  .description(`${PROJECT_NAME} - The Script CLI`);

// defaults to help if commands are not provided
if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
// User input is provided from the process' arguments
commander.parse(process.argv);